var faker = require('faker')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : process.env.MYSQL_PW,
    database : 'join_us'
});

// SELECTING DATA......
// var q = 'SELECT COUNT(*) AS total FROM users' 

// connection.query(q,function(error,results,fileds){
//     if(error) 
//         console.log(error)
//     else
//         console.log(results[0].total)
// });

// INSERTING DATA.....
// var q = "INSERT INTO users(email) VALUES ('natasha@avengers.com')" 

// connection.query(q,function(error,results,fileds){
//     if(error) 
//         console.log(error)
//     else
//         console.log(results)
// });

// INSERT DATA dynamically...
var person = {
                email : faker.internet.email()
             };

connection.query("INSERT INTO users SET ?",person,function(err,results){
    if(err)
        console.log(err)
    else
        console.log(results)
});

connection.end();


