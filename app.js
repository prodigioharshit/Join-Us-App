var faker = require('faker')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : process.env.MYSQL_PW,
    database : 'join_us'
});

var q = 'SELECT COUNT(*) AS total FROM users' 

connection.query(q,function(error,results,fileds){
    if(error) 
        console.log(error)
    else
        console.log(results[0].total)
});

connection.end();