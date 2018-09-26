## Summary
I'd like a way to view a more concise summary of my 40k lists,
and since I haven't found a tool to do what I want, I decided to make it myself and
learn some new tools while I'm at it. BattleScribe is a great app for building tabletop gaming
lists, but it falls a bit short with display options. Enter Quick Battle List!

## Design Considerations
I started this project as a way to learn and become more comfortable with React on top of
the wanting the functionality of the tool. An MVP came together pretty quickly, but loading
data from JSON files wasn't very satisfying. So now data is backed by DynamoDB and accessed
through Lambdas (coded in Node, Python, and Go) and API Gateway. Overkill? Probably, but
it's fun.

#### Technologies Used
* AWS
  * Lambda (Node, Python, Go)
  * Serverless Framework
  * DynamoDB
  * API Gateway
* React
* Bootstrap CSS
* NPM

## Roadmap
(In no particular order)
* Support Editing Server Unit/Weapon stats
* Save lists
* Users? Logins?
* Support factions
* Come up with a style for the UI
* Hide admin for not-me users. Auth? Split out Admin?
* Load client code into S3 as static site
* Automate build/deploy to S3
