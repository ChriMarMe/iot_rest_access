var express = require('express');
var app = express();
var fs = require("fs");

app.post('/', ( req,res ) => {
    data = JSON.parse(req);
    console.log(data);
});


var server = app.listen(8085, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})