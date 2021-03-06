'use strict';

const dynamodb = require('serverless-dynamodb-client');
const docClient = dynamodb.doc;
const uuidv4 = require('uuid/v4');
const createResponse = require('./utils/createResponse');

const tableName = process.env.UNIT_TABLE_NAME;

module.exports.handler = function(event, context, callback) {
    console.log('Received event, writing to db:', JSON.stringify(event, null, 2));

    const data = JSON.parse(event.body);
    // const data = event;

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
        "weapons": data.weapons,
        "points": data.points
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