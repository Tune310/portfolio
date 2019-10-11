var express = require('express');
var bourbon = require('bourbon');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public')); //__dir and not _dir

app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });


var port = 80; // you can use any port
app.listen(port);
console.log('server on port: ' + port);
