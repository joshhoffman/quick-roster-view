'use strict';

const dynamodb = require('serverless-dynamodb-client');
const docClient = dynamodb.doc;
const createResponse = require('./utils/createResponse');
const tableName = process.env.UNIT_TABLE_NAME;

module.exports.handler = function(event, context, callback) {
    console.log('Received event, reading from DB:', JSON.stringify(event, null, 2));

    let params = {
        "TableName": tableName
    };

    docClient.scan(params, (err, data) => {
        let response;
        if (err){
            console.log("An error occurred while writing to db: ", err);
            response = createResponse(500, err);
        }
        else{
            response = createResponse(200, JSON.stringify(data.Items));
        }
        callback(null, response);
    });
};