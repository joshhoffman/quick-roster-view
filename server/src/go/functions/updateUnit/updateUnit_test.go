package main

import (
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"go/dao"
	"testing"
)

func UpdateMock(body string) (dao.Unit, error) {
	//ret := dao.Unit{Id:"testID"}
	var unit dao.Unit
	json.Unmarshal([]byte(body), &unit)
	return unit, nil
}

func TestHandler(t *testing.T) {
	request := events.APIGatewayProxyRequest{}
	request.Body = "{\"id\": \"testid\"}"
	request.PathParameters = make(map[string]string)
	request.PathParameters["id"] = "test id"
	Handler(request, UpdateMock)
}