var http = require('http');

var events = require('events');

var eventEmitter = new events.EventEmitter();


var uc = require('upper-case');

var url = require('url');

http.createServer(function (req, res) {
    var add = 'http://localhost:8080/default.htm?year=2017&month=february';
    var q = url.parse(add, true)
    res.end(uc("Hello world"));


    var myEventHandler = function () {
        console.log('I hear a scream!');
    }

    eventEmitter.on('scream', myEventHandler);

    eventEmitter.emit('scream');


}).listen(8000)


