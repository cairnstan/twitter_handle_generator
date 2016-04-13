var express = require('express');
var index = require('./routes/index.js');
var app = express();

app.use('/', index);
app.use(express.static('server/public'));

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('listening on port', port, 'press ctrl-c to stop');
})
