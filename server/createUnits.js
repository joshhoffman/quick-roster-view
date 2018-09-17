'use strict';
console.log('Loading the create units function');

const AWS = require("aws-sdk");
const dynamodb = require('serverless-dynamodb-client');
const docClient = dynamodb.doc;
const uuidv4 = require('uuid/v4');
const tableName = process.env.UNIT_TABLE_NAME;

const createResponse = (statusCode, body) => {
    return {
        "statusCode": statusCode,
        "body": body || ""
    }
};

module.exports.handler = function(event, context, callback) {
    console.log('Received event, writing to db:', JSON.stringify(event, null, 2));

    const data = JSON.parse(event.body);
    // const data = event.body;

    console.log(data);

    let item = {
        "id": uuidv4(),
        "name": data.name,
        "move": data.move,
        "weaponSkill": data.weaponSkill,
        "ballisticSkill": data.ballisticSkill,
        "strength": data.strength,
        "toughness": data.toughness,
        "wounds": data.wounds,
        "attacks": data.attacks,
        "leadership": data.leadership,
        "save": data.save,
        "weapons": data.weapons
    };

    let params = {
        "TableName": tableName,
        "Item": item
    };

    console.log("putting", params);

    docClient.put(params, (err, data) => {
        let response;
        if (err){
            console.log("An error occurred while writing to db: ", err);
            response = createResponse(500, err);
        }
        else{
            response = createResponse(200);
        }
        callback(null, response);
    });
};