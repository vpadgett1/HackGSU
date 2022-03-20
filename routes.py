from app import app, db, oauth
from models import student_users, parent_users, teacher_users, scores, notifications
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
    if("/loginStudent"):
        return student_users.query.get(user_name)
    elif("/loginTeacher"):
        return teacher_users.query.get(user_name)
    else:
        return parent_users.query.get(user_name)

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

@google.tokengetter
def get_google_oauth_token():
    return flask.session.get("google_token")


@app.route("/loginStudent", methods=["POST"])
def loginStudent_post():
    return google.authorize(callback=flask.url_for("authorizedStudent", _external=True))


@app.route("/loginStudent/authorized")
def authorizedStudent():
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
    else:
        return "User email not available or not verified by Google.", 400
    # Create a user in our database with the information provided by the Google response json
    newUser = student_users(student_email=users_email)

    # Doesn't exist? Add it to the database.
    previousUser = True
    if not student_users.query.filter_by(student_email=users_email).first():
        db.session.add(newUser)
        db.session.commit()
        previousUser = False

    # Begin user session by logging the user in
    login_user(student_users.query.filter_by(student_email=users_email).first())

    # if user already exists, send straight to their home page
    if previousUser:
        # check if user finished onboarding
        if current_user.name == None:
            return flask.redirect(flask.url_for("onboarding"))
        # if merchant user, send to merchant homepage
        # otherwise, regular
        else:
            return flask.redirect(flask.url_for("homepage"))

    # if not, send to onboarding
    return flask.redirect(flask.url_for("onboarding"))


@app.route("/loginTeacher", methods=["POST"])
def loginTeacher_post():
    return google.authorize(callback=flask.url_for("authorizedTeacher", _external=True))


@app.route("/loginTeacher/authorized")
def authorizedTeacher():
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
    else:
        return "User email not available or not verified by Google.", 400
    # Create a user in our database with the information provided by the Google response json
    newUser = teacher_users(teacher_email=users_email)

    # Doesn't exist? Add it to the database.
    previousUser = True
    if not teacher_users.query.filter_by(teacher_email=users_email).first():
        db.session.add(newUser)
        db.session.commit()
        previousUser = False

    # Begin user session by logging the user in
    login_user(teacher_users.query.filter_by(teacher_email=users_email).first())

    # if user already exists, send straight to their home page
    if previousUser:
        # check if user finished onboarding
        if current_user.name == None:
            return flask.redirect(flask.url_for("onboarding"))
        # if merchant user, send to merchant homepage
        # otherwise, regular
        else:
            return flask.redirect(flask.url_for("module"))

    # if not, send to onboarding
    return flask.redirect(flask.url_for("onboarding"))


@app.route("/loginParent", methods=["POST"])
def loginParent_post():
    print("hello darkness")
    return google.authorize(callback=flask.url_for("authorizedParent", _external=True))


@app.route("/loginParent/authorized")
def authorizedParent():
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
    else:
        return "User email not available or not verified by Google.", 400
    # Create a user in our database with the information provided by the Google response json
    newUser = parent_users(parent_email=users_email)

    # Doesn't exist? Add it to the database.
    previousUser = True
    if not parent_users.query.filter_by(parent_email=users_email).first():
        db.session.add(newUser)
        db.session.commit()
        previousUser = False

    # Begin user session by logging the user in
    login_user(parent_users.query.filter_by(parent_email=users_email).first())

    # if user already exists, send straight to their home page
    if previousUser:
        # check if user finished onboarding
        if current_user.name == None:
            return flask.redirect(flask.url_for("onboarding"))
        # if merchant user, send to merchant homepage
        # otherwise, regular
        else:
            return flask.redirect(flask.url_for("homepage"))

    # if not, send to onboarding
    return flask.redirect(flask.url_for("onboarding"))


@app.route("/onboarding")
def onboarding():
    return flask.render_template("index.html")

@app.route("/createAccountStudent", methods=["POST"])
@login_required
def createAccountStudent():
    input_name = flask.request.args.get('name')
    input_education = flask.request.args.get('education')
    input_classroom_id = flask.request.args.get('classroom_id')
    input_parent_name = flask.request.args.get('parent_name')
    input_parent_email =flask.request.args.get('parent_email')
    input_parent_phone = flask.request.args.get('parent_phone')
    input_parent_pref_lang =flask.request.args.get('parent_pref_lang')
    
    current_user.name = input_name
    current_user.education_level = input_education
    current_user.student_class = input_classroom_id
    current_user.parent_name = input_parent_name
    current_user.parent_email = input_parent_email
    current_user.parent_phone = input_parent_phone
    current_user.pre_lang_parent = input_parent_pref_lang
    db.session.commit()

    status = 400
    newAccountCreated = False
    message = "Failed account creation. Please refresh the page and try again."
    if student_users.query.filter_by(
        username=current_user.name, email=current_user.email
    ).first():
        if (
            student_users.query.filter_by(
                username=current_user.name, email=current_user.email
            )
            .first()
            .classroom_id
            == input_classroom_id
        ):
            status = 200
            newAccountCreated = True
            message = "success!"
    return {
        "status": status,
        "newAccountCreated": newAccountCreated,
        "message": message,
    }


@app.route("/createAccountTeacher", methods=["POST"])
@login_required
def createAccountTeacher():
    input_teacher_name = flask.request.args.get('teacher_name')
    input_pre_lang_teacher = flask.request.args.get('pre_lang_teacher')
    input_classroom_grade_level = flask.request.args.get('classroom_grade_level')
    input_classroom_id = flask.request.args.get('classroom_id')
    input_teacher_phone = flask.request.args.get('teacher_phone')

    current_user.teacher_name = input_teacher_name
    current_user.pre_lang_teacher = input_pre_lang_teacher
    current_user.classroom_grade_level = input_classroom_grade_level
    current_user.teacher_phone = input_teacher_phone
    current_user.classroom_id = input_classroom_id
    db.session.commit()

    status = 400
    newAccountCreated = False
    message = "Failed account creation. Please refresh the page and try again."
    if teacher_users.query.filter_by(
        teacher_name=current_user.name, teacher_email=current_user.email
    ).first():
        if (
            teacher_users.query.filter_by(
                teacher_name=current_user.name, teacher_email=current_user.email
            )
            .first()
            .classroom_id
            == input_classroom_id
        ):
            status = 200
            newAccountCreated = True
            message = "success!"
    return {
        "status": status,
        "newAccountCreated": newAccountCreated,
        "message": message,
    }

@app.route("/createAccountParent", methods=["POST"])
@login_required
def createAccountParent():
    input_parent_name = flask.request.args.get('name')
    input_pre_lang_parent = flask.request.args.get('parent_pref_lang')
    input_understanding = flask.request.args.get('understanding')
    input_child_name = flask.request.args.get('child_name')
    input_parent_phone = flask.request.args.get('parent_phone')

    current_user.parent_name = input_parent_name
    current_user.pre_lang_parent = input_pre_lang_parent
    current_user.understanding_level = input_understanding
    current_user.parent_phone = input_parent_phone
    if(input_child_name != "" or input_child_name != None):
        current_user.child = input_child_name
    db.session.commit()

    status = 400
    newAccountCreated = False
    message = "Failed account creation. Please refresh the page and try again."
    if parent_users.query.filter_by(
        name=current_user.name, parent_email=current_user.parent_email
    ).first():
        if (
            parent_users.query.filter_by(
                name=current_user.name, parent_email=current_user.parent_email
            )
            .first()
            .understanding_level
            == input_understanding
        ):
            status = 200
            newAccountCreated = True
            message = "success!"
    return {
        "status": status,
        "newAccountCreated": newAccountCreated,
        "message": message,
    }

@app.route("/homepage")
def homepage():
    return flask.render_template("./index.html")

@app.route("/module_1")
def module1page():
    return flask.render_template("./index.html")

@app.route("/module2-page1")
def module2page1():
    return flask.render_template("./index.html")

@app.route("/module2-page2")
def module2page2():
    return flask.render_template("./index.html")

@app.route("/module2-bird")
def module2bird():
    return flask.render_template("./index.html")

@app.route("/module2-cat")
def module2cat():
    return flask.render_template("./index.html")

@app.route("/module2-dog")
def module2dog():
    return flask.render_template("./index.html")

@app.route("/module2-plane")
def module2plane():
    return flask.render_template("./index.html")

@app.route("/mod1quiz")
def module1quiz():
    return flask.render_template("./index.html")

@app.route("/mod2quiz")
def module2quiz():
    return flask.render_template("./index.html")

@app.route("/updateAssessment1Score")
def updateScore1():
    input_score = flask.request.args.get('score')
    module = "Module #1"
    curr_student = current_user.id 
    curr_parent = current_user.parent_id

    newScoreReport = scores(score=input_score, assessment=module, student=curr_student, parent=curr_parent)
    db.commit(newScoreReport)

    if scores.query.filter_by(
        assessment=module, student=curr_student
    ).first():
        if (
            scores.query.filter_by(
                assessment=module, student=curr_student
            )
            .first()
            .parent
            == curr_parent
        ):
            status = 200
            newAccountCreated = True
            message = "success!"
    return {
        "status": status,
        "newAccountCreated": newAccountCreated,
        "message": message,
    }

@app.route("/updateAssessment2Score")
def updateScore2():
    input_score = flask.request.args.get('score')
    module = "Module #2"
    curr_student = current_user.id 
    curr_parent = current_user.parent_id

    newScoreReport = scores(score=input_score, assessment=module, student=curr_student, parent=curr_parent)
    db.commit(newScoreReport)

    if scores.query.filter_by(
        assessment=module, student=curr_student
    ).first():
        if (
            scores.query.filter_by(
                assessment=module, student=curr_student
            )
            .first()
            .parent
            == curr_parent
        ):
            status = 200
            newAccountCreated = True
            message = "success!"
    return {
        "status": status,
        "newAccountCreated": newAccountCreated,
        "message": message,
    }


# send manifest.json file
@app.route("/manifest.json")
def manifest():
    return flask.send_from_directory("./build", "manifest.json")

@app.route("/")
def main():
    if current_user.is_authenticated:
            return flask.redirect(flask.url_for("homepage"))
    else:
        return flask.render_template("./index.html")


if __name__ == "__main__":
    app.run(
        host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 5000)), debug=True
    )