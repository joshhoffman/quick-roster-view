'use strict';

const AWS = require("aws-sdk");
const dynamodb = require('serverless-dynamodb-client');
const docClient = dynamodb.doc;
const tableName = process.env.TABLE_NAME;

const createResponse = (statusCode, body) => {
    return {
        "statusCode": statusCode,
        "body": body || ""
    }
};

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