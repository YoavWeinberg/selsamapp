var express = require("express");
var app=express();
app.get('/',function(req, res, next){
res.json({SomeNumbersOfPI :"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841"});
//res.json({SumNumbersOfPy :"3.141592653589793238462643383279502884197169399375105"});
});
var port = process.env.PORT || 3000;
app.listen(port, function(){
console.log("Running on port " + port);
});