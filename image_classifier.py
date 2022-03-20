import json
import requests, os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

remote =os.getenv('IMG_CLASSIFIER')



# with open(image_file, "rb") as f:
#     im_bytes = f.read()
# im_b64 = base64.b64encode(im_bytes).decode("utf8")


def get_image_classifier(image_file):
    '''
    This function is used to retrieve image classifier via an external compute resource
    :param image: Image input
    :return: Image Cassifier JSON via Azure Cloud Compute
    '''
    file = open(image_file, 'rb')
    with open(image_file, 'rb') as file:
        up = {'file':(image_file, file, "multipart/form-data")}
        data = {
             "button" : "submit",
        }
        request = requests.post(remote, files=up, data=data)
        print(request.text)
        return request.json()

test = './tst/dog.jpeg'

j = get_image_classifier(test)
p = j['predictions']
for item in p:
    label = item['label']
    probabilility = item['probability']
    print(f'{label}    is    likely to be {probabilility} ')

