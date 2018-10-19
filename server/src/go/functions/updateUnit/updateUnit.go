package main

import (
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"go/dao"
)

func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	fmt.Println("Id: ", request.PathParameters["id"])

	fmt.Println("Got body: ", request.Body)

	ret, err := dao.UpdateUnit(request.Body)

	if err != nil {
		return events.APIGatewayProxyResponse{Body: "Error updating unit", StatusCode: 500}, nil
	}

	var headers map[string]string
	headers = make(map[string]string)
	headers["Access-Control-Allow-Origin"] = "*"
	headers["Content-Type"] = "application/json"
	return events.APIGatewayProxyResponse{Body: ret.Id, StatusCode: 200, Headers: headers}, nil
}

func main() {
	lambda.Start(Handler)
}
