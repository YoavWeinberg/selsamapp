var express = require("express");
var app=express();
app.get('/',function(req, res, next){
    console.log("The Site Sas Opend")
res.json({Message :"This is my new Site"});
});
var port = process.env.PORT || 5555;
app.listen(port, function(){
console.log("Running on port " + port);
});

app.get('/insert', function(req, res, next){
var p1 = {title:"first title", description:"first desc", created: new Date()};
var newItem = new CurrentProduct(p1);
    newItem.save(function(err, item){
        if(err){
            next(err);
        }
        res.json({product:item});
    });//end of save
});
app.get('/getall', function(req, res, next){
    CurrentProduct.find( {} ).then(function(data){
        res.json(data);
    },
    function(err){
        next(err);
    }
    );
});