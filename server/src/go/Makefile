build:
	dep ensure
	env GOOS=linux go build -ldflags="-s -w" -o bin/getWeapons functions/getWeapons/getWeapons.go
	env GOOS=linux go build -ldflags="-s -w" -o bin/updateUnit functions/updateUnit/updateUnit.go
