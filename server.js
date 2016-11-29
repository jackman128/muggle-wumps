var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true}));

mongoose.connect('mongodb://jack:pass123@ds159517.mlab.com:59517/playground');

var Twit = mongoose.model('Twit', {
    content: String,
    time: Date
});

var myTwit = new Twit({content: 'hello', time: new Date()});
myTwit.save(function (err) {
    if (err)
        console.log(err);
    else
        console.log('successfully');
});

app.use(express.static('public'));
app.use('/skeleton', express.static('Skeleton/css'));

app.post('/twit', function(req, res) {
    res.send(req.body.content);
});

app.listen(8080);
