import os
from app import mail
from flask_mail import Message
import flask
from flask_mail import Mail, Connection, Attachment
from config import ADMINS
# email ser
# administrator list



app = flask.Flask(__name__, static_folder="./build/static")
# Setup Mail
mail = Mail(app)


def send_email(subject, sender, recipients, text_body, html_body):
    with app.app_context():
        msg = Message(subject, sender=sender, recipients=['jarrywc@gmail.com'])
        # attach = Attachment()
        msg.body = text_body
        msg.html = html_body

        mail.send(msg)
    return msg


msg = send_email('Hi', sender=ADMINS[0], recipients=ADMINS, text_body='Hi', html_body='<b>HTML</b> body')

print(f'{msg.subject}')


