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
// var person = {
//                 email : faker.internet.email(),
//                 created_at : faker.date.past()
//              };


// var end_result = connection.query("INSERT INTO users SET ?",person,function(err,results){
//     if(err)
//         console.log(err)
//     else
//         console.log(results)
// });

// INSERTING LOTS OF DATA =================

var data = []

for(var i=1;i<=500;i++){
    data.push([faker.internet.email(),
               faker.date.past()
              ]);
}

var q = 'INSERT INTO users(email,created_at) VALUES ?'

var end_result = connection.query(q,[data],function(err,results){
     if(err)
         console.log(err)
    else
        console.log(results)
});

console.log(end_result.sql);

connection.end();


