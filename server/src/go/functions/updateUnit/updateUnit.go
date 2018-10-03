package updateUnit

import (
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"go/dao"
)

func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	fmt.Println("Id: ", request.PathParameters["id"])

	fmt.Println("Got body: " + request.Body);

	ret := dao.UpdateUnit(dao.Unit {Id: "fake"})

	//fmt.Println("Updated item")
	var headers map[string]string
	headers = make(map[string]string)
	headers["Access-Control-Allow-Origin"] = "*"
	return events.APIGatewayProxyResponse{Body: ret.Id, StatusCode: 200, Headers: headers}, nil
}

func main() {
	lambda.Start(Handler)
}