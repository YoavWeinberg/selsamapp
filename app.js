var express = require("express");
var app=express();
var bodyParser = require('body-parser');
var api = require('./api/api');

app.get('/',function(req, res, next){
    console.log("The Site was opend")
    res.json({Message :"This Is My New Site"});
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', api);

var port = process.envPort || 5353;
app.listen(port, function(){
    console.log("Runnig on port " + port);
});