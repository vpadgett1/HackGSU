from app import app, db, oauth
from models import student_users, parent_users, teacher_users
import flask
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
import os
import json
import requests
import base64
from flask_oauthlib.client import OAuth, OAuthException
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv, find_dotenv


load_dotenv(find_dotenv())
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"


login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_name):
    return user.query.get(user_name)

bp = flask.Blueprint("bp", __name__, template_folder="./build")

app.register_blueprint(bp)

google = oauth.remote_app(
    "google",
    consumer_key=app.config.get("GOOGLE_CLIENT_ID"),
    consumer_secret=app.config.get("GOOGLE_CLIENT_SECRET"),
    request_token_params={"scope": "email"},
    base_url="https://www.googleapis.com/oauth2/v1/",
    request_token_url=None,
    access_token_method="POST",
    access_token_url="https://accounts.google.com/o/oauth2/token",
    authorize_url="https://accounts.google.com/o/oauth2/auth",
)


@app.route("/login", methods=["POST"])
def login_post():
    return google.authorize(callback=flask.url_for("authorized", _external=True))


@google.tokengetter
def get_google_oauth_token():
    return flask.session.get("google_token")


@app.route("/login/authorized")
def authorized():
    resp = google.authorized_response()
    if resp is None:
        return "Access denied: reason=%s error=%s" % (
            flask.request.args["error_reason"],
            flask.request.args["error_description"],
        )
    flask.session["google_token"] = (resp["access_token"], "")
    me = google.get("userinfo")
    if me.data["verified_email"]:
        users_email = me.data["email"]
        picture = me.data["picture"]
    else:
        return "User email not available or not verified by Google.", 400
    # Create a user in our database with the information provided by the Google response json
    newUser = user(email=users_email, profile_pic=picture)

    # Doesn't exist? Add it to the database.
    previousUser = True
    if not user.query.filter_by(email=users_email).first():
        db.session.add(newUser)
        db.session.commit()
        previousUser = False

    # Begin user session by logging the user in
    login_user(user.query.filter_by(email=users_email).first())

    # if user already exists, send straight to their home page
    if previousUser:
        # check if user finished onboarding
        if current_user.zip_code == None:
            return flask.redirect(flask.url_for("onboarding"))
        # if merchant user, send to merchant homepage
        # otherwise, regular
        if current_user.yelp_restaurant_id:
            return flask.redirect(flask.url_for("merchant"))
        else:
            return flask.redirect(flask.url_for("discover"))

    # if not, send to onboarding
    return flask.redirect(flask.url_for("onboarding"))


@app.route("/onboarding")
def onboarding():
    return flask.render_template("index.html")