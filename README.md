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

**Due to time constraints I did not apply any form validation.**

You can search all entries by leaving the search field blank and clicking
Search Zip Codes - Accepts full or partial zipcode values.
Search City Name - Accepts full or partial words as values.
Search Latitude - Accepts a float and returns the closest city object to that latitude.
Search Longitude - Accepts full or partial zipcode values closest city object to that longitude. .
Search Attributes - Accepts State abbreviations in upper or lower case returns city objects.

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

| command       | description           |
| :------------ | :-------------------- |
| `npm install` | installs dependencies |

## Package Scripts

| command              | description                                           |
| :------------------- | :---------------------------------------------------- |
| `npm run format:fix` | format files with "prettier"                          |
| `npm run test`       | execute tests with "jest"                             |
| `npm start`          | starts Express server on port 3000 and starts Nodemon |
