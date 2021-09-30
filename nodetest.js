var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// app.get('/', function (req, res) {
//     res.send('Hello World');
// })

// This responds a POST request for the homepage
app.get('/test-server', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

console.log('Server running at http://127.0.0.1:8081/');