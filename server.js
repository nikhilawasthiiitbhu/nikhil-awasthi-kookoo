var express = require('express');
var router=express.Router()
var app = express();
var processnumber;
var i;

app.use('/',router);

router.get('/', function(req, res){
	   
	   
	    if(!req.query.data)
	    {
	    	res.sendFile(__dirname + "/public/" + "main.xml");
	    	i=1;

	    }
	    else if(i===1)
		{
		    console.log(request);
		    res.sendFile(__dirname + "/public/" + req.query.data + ".xml");
            i++;
         }
	    else
	    {   console.log(request);
	    	res.sendFile(__dirname + "/public/" + req.query.data + "two" + ".xml");
	    	i--;
	    }
	})

var server = app.listen(process.env.PORT || 5000);

