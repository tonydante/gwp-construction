var express = require('express');
var dotenv = require('dotenv');
var path = require('path');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
  res.sendFile('index.html')
});


app.listen(port, (err)=> {
  if(err) {
    console.log(err, 'An error occured');
  }
  console.log('Server is running on port ', port);
})
