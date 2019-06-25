var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user : 'DME',
    password : 'DME2020',
    database: 'test_login'
}); 

// con.connect(function (err) {
//     if (err) throw errr;
//     console.log('connected');
//     var sql = "INSERT INTO items (Name, Cost, discount_cost) VALUES ('Michelle', 'Blue Village','12')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Last Inserted Id Is : " + result.insertId);
//     });
// });


// con.connect(function (err) {
//     if (err) throw err;
//     var id = '48'
//     con.query("SELECT * FROM items where id =" + mysql.escape(id), function (err, result) {
//         if (err) throw err; 
//         console.log(result);
//     }) 
// })


// con.connect(function (err) {
//     if (err) throw err; 
//     var id = '48';
//     var sql = "SELECT * FROM items where id =  ?";
//     con.query(sql, [id], function (err, result) {
//         if (err) throw err;
//         console.log(result)
//     })
// })

// con.connect(function (err) {
//     if (err) throw err; 
//     var id = '49';
//     var sql = "DELETE FROM items where id = ?";
//     con.query(sql, [id], function (err, result) {
//         if (err) throw err; 
//         console.log(result);
//     })
// })

// for dropping the tables 

// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "DROP table password_resets";
//     con.query(sql, function (err , result) {
//         if (err) throw err;
//         console.log("tables deleted");
//     })
// })


