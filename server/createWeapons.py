import json
import logging
import os
import uuid

import boto3
dynamodb = boto3.resource('dynamodb')

print('here')

def handler(event, context):
    data = json.loads(event['body'])
    if 'name' not in data:
        logging.error("Validation Failed")
        raise Exception("Couldn't create the todo item.")
        return

    table = dynamodb.Table(os.environ['WEAPON_TABLE_NAME'])

    item = {
        'id': str(uuid.uuid4()),
        'name': data['name'],
        'type': data['type'],
        'range': data['range'],
        'strength': data['strength'],
        'ap': data['ap'],
        'damage': data['damage'],
    }

    # write the todo to the database
    table.put_item(Item=item)

    # create a response
    response = {
        "statusCode": "200",
        "body": json.dumps(item),
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    return response