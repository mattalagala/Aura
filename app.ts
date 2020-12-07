const db = require("./lib/db");
const lambda = require("./lib/index");
const express = require("express");

const bodyParser = require("body-parser");
const hbs = require("express-hbs");

const app = express();
const port = 9999;

const startExpressApp = () => {
	app.listen(port, () => {
		console.log("express is listening on port " + port);
	});
};

// Allows for database connection
db.connect(startExpressApp());

// Configure Handlebars Template Enginee
app.set("view engine", "hbs");

app.set("views", __dirname + "/views");

// Serve files out of the public directory
app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req: any, res: any) {
	res.render("index");
});

// Zipcodes
app.post("/zipcodes", function(req: any, res: any, next: Function) {
	// Gives the request an ID for the Switch in the Lambda Function
	req.body.id = 0;
	// Creates an event object to pass to Lambda
	const eventObject = req.body;
	// Passes user's search query to appropriate resources page.
	const topOfPageField = req.body.zip.toUpperCase();
	// Invokes Lamda function and passes resulting promise to template engine
	lambda
		.handler(eventObject)
		.then((results: any) => {
			if (results.length === 0) {
				res.render("error");
			} else {
				const query = {
					query: [topOfPageField],
				};
				res.render("zipcodes", {
					results: results,
					query: query,
				});
			}
		})
		.catch((err: any) => console.log("Uh oh, we got ourselves an error", err));
});

// City Names
app.post("/citynames", function(req: any, res: any, next: Function) {
	// Gives the request an ID for the Switch in the Lambda Function
	req.body.id = 1;
	// Creates an event object to pass to Lambda
	const eventObject = req.body;
	// Passes user's search query to appropriate resources page.
	const topOfPageField = req.body.city.toUpperCase();
	// Invokes Lamda function and passes resulting promise to template engine
	lambda
		.handler(eventObject)
		.then((results: any) => {
			if (results.length === 0) {
				res.render("error");
			} else {
				const query = {
					query: [topOfPageField],
				};
				res.render("citynames", {
					results: results,
					query: query,
				});
			}
		})
		.catch((err: any) => console.log("Uh oh, we got ourselves an error", err));
});

// Latitude
app.post("/latitude", function(req: any, res: any, next: Function) {
	// Gives the request an ID for the Switch in the Lambda Function
	req.body.id = 2;
	// Creates an event object to pass to Lambda
	const eventObject = req.body;
	// Passes user's search query to appropriate resources page.
	const topOfPageField = req.body.latitude.toUpperCase();
	// Invokes Lamda function and passes resulting promise to template engine
	lambda
		.handler(eventObject)
		.then((results: any) => {
			if (results.length === 0) {
				res.render("error");
			} else {
				const query = {
					query: [topOfPageField],
				};
				res.render("latitude", {
					results: results,
					query: query,
				});
			}
		})
		.catch((err: any) => console.log("Uh oh, we got ourselves an error", err));
});
app.post("/longitude", function(req: any, res: any, next: Function) {
	// Gives the request an ID for the Switch in the Lambda Function
	req.body.id = 3;
	// Creates an event object to pass to Lambda
	const eventObject = req.body;
	// Passes user's search query to appropriate resources page.
	const topOfPageField = req.body.longitude.toUpperCase();
	// Invokes Lamda function and passes resulting promise to template engine
	lambda
		.handler(eventObject)
		.then((results: any) => {
			if (results.length === 0) {
				res.render("error");
			} else {
				const query = {
					query: [topOfPageField],
				};
				res.render("longitude", {
					results: results,
					query: query,
				});
			}
		})
		.catch((err: any) => console.log("Uh oh, we got ourselves an error", err));
});

app.post("/attributes", function(req: any, res: any, next: Function) {
	// Gives the request an ID for the Switch in the Lambda Function
	req.body.id = 4;
	// Creates an event object to pass to Lambda
	const eventObject = req.body;
	// Passes user's search query to appropriate resources page.
	const topOfPageField = req.body.state.toUpperCase();
	// Invokes Lamda function and passes resulting promise to template engine
	lambda
		.handler(eventObject)
		.then((results: any) => {
			if (results.length === 0) {
				res.render("error");
			} else {
				const query = {
					query: [topOfPageField],
				};
				res.render("attributes", {
					results: results,
					query: query,
				});
			}
		})
		.catch((err: any) => console.log("Uh oh, we got ourselves an error", err));
});
