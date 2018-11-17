var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./routes/message.router');
var app = express();

// PORT
var port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));
mongooseConnection.connect();

// EXPRESS ROUTES
app.use('/messages', messages);

// PORT LISTENING
app.listen(port, function () {
    console.log('listening on port', port);
});