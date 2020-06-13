var express = require("express");
var app=express();
app.get('/',function(req, res, next){
res.json({FirstMessage:"Unnesesery Text...."});
res.json({SumNumbersOfPy :"3.141592653589793238462643383279502884197169399375105"});
});
var port = process.env.PORT || 3000;
app.listen(port, function(){
console.log("Running on port " + port);
});