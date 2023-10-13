var path = require('path');
var express = require('express');
var app = express();

//setting middleware
app.use(express.static('public')); //Serves resources from public folder

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = app.listen(8080, () => console.log('Server is running on port 8080'));