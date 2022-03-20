# pylint: disable=E1101
# pylint: disable=C0413
# pylint: disable=W1508
# pylint: disable=R0903
# pylint: disable=W0603
import flask
import os
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from dotenv import load_dotenv, find_dotenv
from flask_oauthlib.client import OAuth, OAuthException

load_dotenv(find_dotenv())

app = flask.Flask(__name__, static_folder="./build/static")
# This tells our Flask app to look at the results of `npm build` instead of the
db_url = os.getenv("DATABASE_URL")
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)
app.config["SQLALCHEMY_DATABASE_URI"] = db_url
# Gets rid of a warning
app.config['GOOGLE_CLIENT_ID'] = os.getenv("Google_Client_Id")
app.config['GOOGLE_CLIENT_SECRET'] = os.getenv("Google_Client_Secret")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = os.environ.get("SECRET_KEY")
oauth = OAuth(app)

mail = Mail(app)
db = SQLAlchemy(app)
