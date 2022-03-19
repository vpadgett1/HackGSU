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
YELP_API_KEY = os.environ["YELP_API_KEY"]
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"


login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_name):
    return user.query.get(user_name)