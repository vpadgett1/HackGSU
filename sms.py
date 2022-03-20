# Download the helper library from https://www.twilio.com/docs/python/install
import os
from dotenv import load_dotenv, find_dotenv
from twilio.rest import Client


load_dotenv(find_dotenv())

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
outbound_number = os.environ['TWILIO_PHONE_NUM']
client = Client(account_sid, auth_token)

def send_message(body, to):
    '''

    :param body: string,
    :param to: string
    :return:
    '''
    message = client.messages \
                    .create(
                         body=str(body),
                         from_=outbound_number,
                         to=str(to)

                     )
    return message

msg = send_message("Hey, Jarred", "+16788227814")
msg.status
print(f"Sid{msg.sid}, {msg.to} {msg.from_}")