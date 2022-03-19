import flask
from flask_login.utils import login_required
import os
import json
from spotify import get_track_data
from genius import get_lyrics_link
from flask_sqlalchemy import SQLAlchemy
import flask_login
from werkzeug.security import generate_password_hash, check_password_hash

app = flask.Flask(__name__, static_folder="./build/static")
# This tells our Flask app to look at the results of `npm build` instead of the
# actual files in /templates when we're looking for the index page file. This allows
# us to load React code into a webpage. Look up create-react-app for more reading on
# why this is necessary.

app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0

# flask login establishment for the app
login_manager = flask_login.LoginManager()
login_manager.login_view = "auth.login"
login_manager.init_app(app)

# Point SQLAlchemy to your Heroku database
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
# Gets rid of a warning
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# creates the database to store info too.
db = SQLAlchemy(app)
# imports the databases from the login page
# from models import users


class users(flask_login.UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=True, nullable=False)

    def __repr__(self):
        return "<User %r>" % self.username


class artists(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    artist_id = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return "<artist_id %r>" % self.artist_id


db.create_all()


@login_manager.user_loader
def load_user(user_id):
    return users.query.get(int(user_id))


bp = flask.Blueprint("bp", __name__, template_folder="./build")


@bp.route("/index")
@login_required
def index():
    # TODO: insert the data fetched by your app main page here as a JSON
    DATA = {"your": "data here"}
    data = json.dumps(DATA)
    return flask.render_template(
        "index.html",
        data=data,
    )


app.register_blueprint(bp)


@app.route("/signup")
def signup():
    return flask.render_template("signup.html")


@app.route("/signup", methods=["POST"])
def signup_post():
    if flask.request.method == "POST":
        login_user = flask.request.form.get("login_user")
        login_pass = flask.request.form.get("login_pass")

        user = users.query.filter_by(username=login_user).first()

        if user:
            flask.flash("This username has already been taken. Please choose another.")
            return flask.redirect(flask.url_for("/signup"))

        password = generate_password_hash(login_pass)
        login_info = users(username=login_user, password=password)
        db.session.add(login_info)
        db.session.commit()

    return flask.redirect(flask.url_for("login"))


@app.route("/login")
def login():
    if flask_login.current_user.is_authenticated:
        return flask.redirect(flask.url_for("display"))

    return flask.render_template("login.html")


@app.route("/login", methods=["POST"])
def login_post():
    username = flask.request.form.get("login_user")
    user_pass = flask.request.form.get("login_pass")

    user = users.query.filter_by(username=username).first()

    if not user or not check_password_hash(user.password, user_pass):
        flask.flash(
            "This username and password combination is incorrect. Please try again."
        )
        return flask.redirect(flask.url_for("login"))

    flask_login.login_user(user, remember=True)
    return flask.redirect(flask.url_for("display"))


@app.route("/save", methods=["POST"])
def save():
    artist = flask.request.form.get("artist_id")
    valid_id_check = get_track_data(artist)
    if valid_id_check:
        artist_info = artists(
            username=flask_login.current_user.username, artist_id=artist
        )
        queryCheck = artists.query.filter_by(
            username=flask_login.current_user.username, artist_id=artist
        ).all()
        if not queryCheck:
            db.session.add(artist_info)
            db.session.commit()

    queryResults = artists.query.filter_by(
        username=flask_login.current_user.username
    ).all()
    # print(queryResults)
    if not queryResults:
        return flask.render_template(
            "index.html",
            query=queryResults,
            artist=[],
            title=[],
            previewURL=[],
            image=[],
            artist_url=[],
            lyricsURL=[],
        )
    else:
        listingofArtists = list(queryResults)
        # print(listingofArtists)
        # pull in spotify data to get the track data for a random track
        track_data = get_track_data(listingofArtists)
        # pull in link to genius page to showcase the lyrics for the random song
        lyrics_link = get_lyrics_link(track_data["title"])
        # render the web app using flask, passing arguments from both spotify track data and genius lyrics link
        return flask.render_template(
            "index.html",
            query=queryResults,
            artist=track_data["artist"],
            title=track_data["title"],
            previewURL=track_data["previewURL"],
            image=track_data["image"],
            artist_url=track_data["artistURL"],
            lyricsURL=lyrics_link["lyricsURL"],
        )


@app.route("/")
def main():
    ...


app.run(
    host=os.getenv("IP", "0.0.0.0"),
    port=int(os.getenv("PORT", 8081)),
)
