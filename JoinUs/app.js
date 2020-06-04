var express = require('express')
var app = express()

app.get("/",function(req,res){
    res.send("This is index page")
});





app.listen(3000,function(req,res){
     console.log("Server started");
})