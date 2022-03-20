import os
from app import mail
from flask_mail import Message
import flask, os
from dotenv import load_dotenv, find_dotenv
from flask_mail import Mail, Connection, Attachment
from config import ADMINS
import config as ADMIN
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


# email ser
# administrator list

load_dotenv(find_dotenv())

app = flask.Flask(__name__)
# Setup Mail
mail_ = Mail(app)


def send_email(subject, sender, recipients, text_body, html_body):
    with app.app_context():
        try:
            msg = Message(subject, sender=sender, recipients=['jarrywc@gmail.com'])
            # attach = Attachment()
            msg.body = text_body
            msg.html = html_body

            mail_.send(msg)
        except ConnectionRefusedError:
            print(f'Connection Refused: {ConnectionRefusedError.strerror}')
    return msg


# msg = send_email('Hi', sender=ADMINS[0], recipients=ADMINS, text_body='Hi', html_body='<b>HTML</b> body')

# print(f'{msg.subject}')


import imaplib
import email

host = ADMIN.MAIL_SERVER
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


def send_mail(text='Email Body', subject='Hello World', to_emails=None, html=None):
    '''
    Sends mail from admin
    :param text: Email Body as inline text String
    :param subject: Email Subject
    :param to_emails: List of Emails to send
    :param html: Email Body as HTML inline String
    :return:
    '''
    assert isinstance(to_emails, list)
    msg = MIMEMultipart('alternative')
    msg['From'] = from_email
    msg['To'] = ", ".join(to_emails)
    msg['Subject'] = subject
    print(f'Subject: {subject}')
    txt_part = MIMEText(text, 'plain')
    msg.attach(txt_part)
    if html != None:
        html_part = MIMEText(html, 'html')
        msg.attach(html_part)
    msg_str = msg.as_string()

    # login to my smtp server
    server = smtplib.SMTP_SSL(host='premium5.web-hosting.com', port=465)
    print('I am here')
    server.ehlo()
    # server.starttls()
    server.login(username, password)
    server.sendmail(from_email, to_emails, msg_str)
    server.
    server.quit()
    return


if __name__ == "__main__":
    # my_inbox = get_inbox()
    # print(my_inbox)
    send_mail(to_emails=['jarrywc@gmail.com'])

    print(f'{mail}')