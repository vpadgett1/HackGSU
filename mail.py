import os
from app import mail
from flask_mail import Message
import flask, os
from dotenv import load_dotenv, find_dotenv
from flask_mail import Mail, Connection, Attachment
from config import ADMINS
import config
# email ser
# administrator list

load_dotenv(find_dotenv())

app = flask.Flask(__name__)
# Setup Mail
mail = Mail(app)


def send_email(subject, sender, recipients, text_body, html_body):
    with app.app_context():
        try:
            msg = Message(subject, sender=sender, recipients=['jarrywc@gmail.com'])
            # attach = Attachment()
            msg.body = text_body
            msg.html = html_body

            mail.send(msg)
        except ConnectionRefusedError:
            print(f'Connection Refused: {}')
    return msg


# msg = send_email('Hi', sender=ADMINS[0], recipients=ADMINS, text_body='Hi', html_body='<b>HTML</b> body')

# print(f'{msg.subject}')


import imaplib
import email

host = config['MAIL_SERVER']
username = os.getenv('MAIL_USERNAME')
password =os.getenv('MAIL_PASSWORD')


def get_inbox():
    mail = imaplib.IMAP4_SSL(host)
    mail.login(username, password)
    mail.select("inbox")
    _, search_data = mail.search(None, 'UNSEEN')
    my_message = []
    for num in search_data[0].split():
        email_data = {}
        _, data = mail.fetch(num, '(RFC822)')
        # print(data[0])
        _, b = data[0]
        email_message = email.message_from_bytes(b)
        for header in ['subject', 'to', 'from', 'date']:
            print("{}: {}".format(header, email_message[header]))
            email_data[header] = email_message[header]
        for part in email_message.walk():
            if part.get_content_type() == "text/plain":
                body = part.get_payload(decode=True)
                email_data['body'] = body.decode()
            elif part.get_content_type() == "text/html":
                html_body = part.get_payload(decode=True)
                email_data['html_body'] = html_body.decode()
        my_message.append(email_data)
    return my_message


if __name__ == "__main__":
    my_inbox = get_inbox()
    print(my_inbox)