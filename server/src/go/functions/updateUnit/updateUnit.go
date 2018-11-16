package main

import (
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"go/dao"
)

type UpdateFunction func(body string) (dao.Unit, error)
type HandlerFunction func(request events.APIGatewayProxyRequest, updateFunction UpdateFunction) (events.APIGatewayProxyResponse, error)


func Handler(request events.APIGatewayProxyRequest, updateFunction UpdateFunction) (events.APIGatewayProxyResponse, error) {
	fmt.Println("Id: ", request.PathParameters["id"])

	fmt.Println("Got body: ", request.Body)

	//ret, err := dao.UpdateUnit(request.Body)
	ret, err := updateFunction(request.Body)

	if err != nil {
		return events.APIGatewayProxyResponse{Body: "Error updating unit", StatusCode: 500}, nil
	}

	var headers map[string]string
	headers = make(map[string]string)
	headers["Access-Control-Allow-Origin"] = "*"
	headers["Content-Type"] = "application/json"
	return events.APIGatewayProxyResponse{Body: ret.Id, StatusCode: 200, Headers: headers}, nil
}

func getHandler(updater UpdateFunction) HandlerFunction {
	return Handler
}

func main() {
	lambda.Start(getHandler(dao.UpdateUnit))
}
