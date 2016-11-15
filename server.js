var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/skeleton', express.static('Skeleton/css'));

app.listen(8080);
