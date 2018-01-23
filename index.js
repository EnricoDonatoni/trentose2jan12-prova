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

app.get("/domanda", function(req, res){
//Math.round((Math.random()*domande.length)
	var id = req.query.id;
	if(typeof(id) === "undefined"){
		modulo.idnonvalido(res,domande);
	}
	else{
		
		if(id == parseInt(id) || id == "" || isNaN(id)){
			
			
			modulo.idnonvalido(res,domande);
		}
		else{
			console.log("ccc");
			var n = parseInt(id);
			if((n < 0) || (n > domande.length)){
				res.setHeader('Content-Type', 'application/json');
				res.status(400).json({
					errore: "Out of range"
				});
			}
			else{
				res.setHeader('Content-Type', 'application/json');
				res.status(200).json({
					question: domande[n].question,
					idq : n
				});
			}
		}
		

	}
    
}); 

app.post("/domanda", function(req, res){

    var dom = req.body.dom || req.query.dom;
    var ris = req.body.ris || req.query.ris;

    var error = "";
    var domanda={
    	question : "",
    	answer : ""
    };

    if(typeof(dom) === "undefined"){
    	error = "Inserire una domanda valida";
    }
    else{
	    if(typeof(ris) === "undefined"){
	    	error = "Inserire una risposta valida";
	    }	
	    else{
	    		domanda.question = dom;
	    		domanda.answer = ris;
	    		domande.push(domanda);
	    	}
	    
    }

    if(error != ""){
    	res.setHeader('Content-Type', 'application/json');
    	res.status(400).json({
    		errore: error
    	});
    }
    else{	    	
		res.status(200).json({
			status: "Ok! Domanda aggiunta",
			pos: domande.length-1
		});
    }

});

app.post("/risposta", function(req, res){
   
    var id = req.body.id || req.query.id;
    var ris = req.body.ris || req.query.ris;

    var error = "";

    var n

    console.log(id);

    if(tentativi>0){



	    if(typeof(id) === "undefined"){
			error="Id non valido 1";
		}
		else{
			
			if(id != parseInt(id) || id == "" || isNaN(id)){
				
				
				error="Id non valido 2";
			}
			else{
				
				n = parseInt(id);
				if((n < 0) || (n > domande.length)){
					error="Id non valido 3";
				}

			}
			

		}

	    if(error != ""){
	    	res.setHeader('Content-Type', 'application/json');
	    	res.status(400).json({
	    		errore: error
	    	});
	    }
	    else{	 
	    	if(modulo.check(ris, domande[n].answer)==1){
	    		res.setHeader('Content-Type', 'application/json');
	    		res.status(200).json({
					status: "Risposta giusta",
					tentativi: tentativi
				});
	    	}
	    	else
	    	{
	    		tentativi--;
	    		res.setHeader('Content-Type', 'application/json');
	    		res.status(200).json({
					status: "Risposta sbagliata",
					tentativi: tentativi
				});


	    	}

	    }


	}
	else
	{
		res.setHeader('Content-Type', 'application/json');
	    		res.status(200).json({
					status: "Tentativi finiti",
					
				});

	}

});

//listen in a specific port
app.listen((process.env.PORT || 65000));

//check status
console.log('Server running at http://localhost:65000/');