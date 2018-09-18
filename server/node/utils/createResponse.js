module.exports = (statusCode, body) => {
    return {
        "statusCode": statusCode,
        "body": body || "",
        headers: {
            "Access-Control-Allow-Origin" : "*"
        }
    }
};

