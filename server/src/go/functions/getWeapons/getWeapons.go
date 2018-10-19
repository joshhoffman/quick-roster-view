package main

import (
	"encoding/json"
	"fmt"
	"go/dao"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	weapons, err := dao.GetAllWeapons()

	if err != nil {
		panic("Failed to get items")
	}

	if len(weapons) == 0 {
		return events.APIGatewayProxyResponse{Body: request.Body, StatusCode: 404}, nil
	}

	stringItems := "["
	for i := 0; i < len(weapons); i++ {
		jsonItem, _ := json.Marshal(weapons[i])
		stringItems += string(jsonItem)
		if i != len(weapons)-1 {
			stringItems += ",\n"
		}
	}
	stringItems += "]\n"

	var headers map[string]string
	headers = make(map[string]string)
	headers["Access-Control-Allow-Origin"] = "*"

	fmt.Println("Found items: ", stringItems)
	return events.APIGatewayProxyResponse{Body: stringItems, StatusCode: 200, Headers: headers}, nil
}

func main() {
	lambda.Start(Handler)
}
