var http = require('http');
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydata";
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(8080);

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = {  name: "company inc", address : "Nagpur" }

//     dbo.collection("Terms").insertOne(myobj, function (err, res) {
//        if(err) throw err; 
//        console.log('Created Data') ;
//        db.close();
//     })

//     // dbo.createCollection("Terms", function (err, res) {
//     //     if (err) throw err;
//     //     console.log("Colleciton is created");
//     //     db.close();
//     // })
// });

// find commections
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("Terms").findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//     })
// })

// For Creating database.

// MongoClient.connect(url , (err, db)=> {
//     if(err) throw err;
//     console.log("Database Created");
// });

// Create collections
//  MongoClient.connect(url, (err, db) => {
//      var dbo = db.db("mydata");
//      dbo.createCollection("users", (err, res)=> {
//         if(err) throw err
//         console.log("Collections Created");
//         db.close();
//      })
//  })

// insert data into database 
// MongoClient.connect(url, (err, db)=>{
//     var dbo = db.db("mydata");
//     var myobj = { first_name:  "Donald", last_name : "Kumar", age : "29", data : "N/A"}
//     dbo.collection("users").insertOne(myobj, (err, res)=> {
//         if (err) throw err; 
//         console.log("Data Inserted Successfully !!");
//         db.close();
//     }) 
// });

// Find the data from the database. 
// MongoClient.connect(url, (err, db) =>  {
//     var dbo = db.db("mydata");
//     var query = {first_name: "Yogesh"};
//     dbo.collection("users").find(query).toArray((err, result) => {
//          if (err) throw err; 
//          console.log(result);
//     })
// })