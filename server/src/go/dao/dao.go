package dao

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

type Weapon struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Type     string `json:"type"`
	Range    string `json:"range"`
	Strength string `json:"strength"`
	Ap       string `json:"ap"`
	Damage   string `json:"damage"`
}

type Unit struct {
	Id string `json:"id"`
}

func GetSession() *dynamodb.DynamoDB {
	session := session.Must(session.NewSession())
	svc := dynamodb.New(session)
	return svc
}

func UpdateUnit(body string) (Unit, error) {
	// build dynamo client
	//svc := GetSession()
	var unit Unit
	json.Unmarshal([]byte(body), &unit)

	return unit, nil
}

func GetAllWeapons() ([]Weapon, error) {
	// build dynamo client
	svc := GetSession()
	weapons := []Weapon{}

	params := &dynamodb.ScanInput{
		TableName: aws.String(os.Getenv("WEAPON_TABLE_NAME")),
	}

	result, err := svc.Scan(params)
	fmt.Println("Result", result)

	numItems := 0
	for _, i := range result.Items {
		weapon := Weapon{}
		err = dynamodbattribute.UnmarshalMap(i, &weapon)

		if err != nil {
			fmt.Println("Got error unmarshalling:")
			fmt.Println(err.Error())
			return weapons, err
		}

		fmt.Println("Name", weapon.Name)
		weapons = append(weapons, weapon)
		numItems++
	}

	if err != nil {
		fmt.Println(err.Error())
		return weapons, err
	}

	return weapons, nil
}
