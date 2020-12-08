# Aura Code Challenge - Matthew Alagala

To accomplish this challenge I chose to build a complete app to visualize querying data through user input and displaying the query results.

#### Front End

I used a empty bootstrap template and utilized the bootstrap cards.
I used Handlebars as the Express template engine which makes rendering easy.

#### Middleware/Backend

Because the data.json was provided and I chose to take user inputs from the front end, I utilized Express to catch POST requests from my form. I then created a simplified event object to pass into the Lambda handler. The handler takes the created event object, looks for the event id and executes the appropriate function in the handler.

Similarly for an HTTP GET/POST request I would use the Axios library passing in event object as the parameters.

### Event Object

The simplified event object is shown below.

```json
{
	"userAttribute": "value",
	"attributeID:": "1"
}
```

### Features

_Due to time constraints I did not apply any form validation. _

Search Zip Codes

### Sample Zipcode Object

The resulting data is the same format as specified:

```json
{
	"zip": "01230",
	"type": "STANDARD",
	"primary_city": "Great Barrington",
	"acceptable_cities": "Egremont, Gt Barrington, N Egremont, New Marlboro, New Marlborou, New Marlborough, North Egremont, Simons Rock",
	"unacceptable_cities": "Alford, Berkshire Heights, Hartsville, Risingdale, Van Deusenville",
	"state": "MA",
	"county": "Berkshire County",
	"timezone": "America/New_York",
	"area_codes": "413",
	"latitude": "42.19",
	"longitude": "-73.35",
	"country": "US",
	"estimated_population": "5873"
}
```

## Installation

**Create a lambda-like handler function that can query zip code data in various ways**

- handler function is already bootstrapped in `src/index.js`
- handler is invoked with events (see below) as would come from API Gateway
- it is `async` and should return an array or throw an error
- the dataset to be searched is included in the `src/data.json` file
- look at the data and decide how best to utilize it

### Acceptance Criteria

- design and define zipcode api
- implement zipcode api handler
- search by full or partial zipcode
- search by full or partial city name
- search by closest latitude/longitude
- filter by additional attributes

### Sample Zipcode Object

```json
{
	"zip": "01230",
	"type": "STANDARD",
	"primary_city": "Great Barrington",
	"acceptable_cities": "Egremont, Gt Barrington, N Egremont, New Marlboro, New Marlborou, New Marlborough, North Egremont, Simons Rock",
	"unacceptable_cities": "Alford, Berkshire Heights, Hartsville, Risingdale, Van Deusenville",
	"state": "MA",
	"county": "Berkshire County",
	"timezone": "America/New_York",
	"area_codes": "413",
	"latitude": "42.19",
	"longitude": "-73.35",
	"country": "US",
	"estimated_population": "5873"
}
```

### Sample Events

```json
{
	"httpMethod": "GET",
	"path": "/resource",
	"headers": {},
	"queryStringParameters": {
		"date": "2020-11-13"
	}
}
```

```json
{
	"httpMethod": "POST",
	"path": "/resouce",
	"headers": {
		"content-type": "application/json"
	},
	"body": "{\"title\":\"hello world\"}"
}
```

## Suggestions

- Spend as much or as little time as you wish on this challenge.
- Many implementation details are up to you, be prepared to explain your decisions.
- Details matter, but you should strive to provide a complete feature.
- Use any node packages you want, just remember we want to know what _you_ can do.
- Consider how you can show how your feature should work, and prove that it does work.

## Getting started

- this bundle contains a git repository
- work locally, commit changes
- push to your own git service
- share the repository link with us

## Package Scripts

| command              | description                  |
| :------------------- | :--------------------------- |
| `npm run format:fix` | format files with "prettier" |
| `npm run test`       | execute tests with "jest"    |
