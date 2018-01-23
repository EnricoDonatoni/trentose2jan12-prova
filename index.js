//express
var express = require('express');
var bodyParser = require('body-parser');
//inspect variables
var util = require('util');
var modulo = require("./area.js");

//instantiate express
var app = express();
var tentativi = 3;

app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

var domande = [];

app.get("/getArea", function(req, res){
//Math.round((Math.random()*domande.length)
	res.setHeader("Content-Type", "application/json");
	var side1 = req.query.side1;
	var side2 = req.query.side2;

	var risultato = modulo.getArea([side1,side2]);

	if (risultato == -1){
		res.status(400).json({
			area: risultato,
		});
	}
	else{
		res.status(200).json({
			area: risultato,
		});
	}
	
	
    
}); 

//listen in a specific port
app.listen((process.env.PORT || 65000));

//check status
console.log('Server running at http://localhost:65000/');