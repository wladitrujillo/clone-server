var express = require('express');
var app = express();

//setting middleware
app.use(express.static('public')); //Serves resources from public folder


var server = app.listen(8080, ()=> console.log('Server is running on port 8080'));