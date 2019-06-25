var http = require( 'http' );

var fs = require('fs');

var dt = require('./myModule.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/Html' });

    fs.readFile('demo.html', function (err,data) {
        res.write(data);
        res.end();
    });

    fs.open('mynewfile3.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved');
    });
    
    fs.writeFile('mynewfile3.txt', 'Hello Yogesh Vishwakarma', function (err) {
        if(err) throw err;
        console.log("Data Saved in file");
    })

    fs.appendFile('mynewfile3.txt', 'add new file content', function (err) {
        if (err) throw err; 
    })

    fs.readFile('demo.html', function (err, data) {
        fs.appendFile('mynewfile3.txt', data, function (err) {
            if (err) throw err;
        })
    })
}).listen(8000)