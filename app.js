var express = require('express');
 
var app = express();
//Respoand with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello worldu');
});

app.get('/ping', function (req, res) {
 res.send('pong 0.0.19');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 8080);
 
module.exports = app;
