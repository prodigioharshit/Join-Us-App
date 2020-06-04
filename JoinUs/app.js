
var express    = require('express');
var mysql      = require('mysql');
var ejs        = require('ejs');
var bodyParser = require('body-parser');
var app        = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : process.env.MYSQL_PW,
    database : 'join_us'
});


app.get("/",function(req,res){
    
    //count of users in db
    var q = 'SELECT COUNT(*) AS total FROM users';
    connection.query(q,function(error,results,fileds){
        if(error)
            throw error
        res.render("home",{total:results[0].total});    
    })
});

app.post("/register",function(req,res){
    
    //insert into db
    var user = {
              email: req.body.email
    };
    
    var q = 'INSERT INTO users SET ? ' ;
    connection.query(q,user,function(err,results){
        if(err)
            throw err
        console.log(results)
        res.redirect("/");            
    });
});


app.listen(3000,function(req,res){
     console.log("Server started");
})

