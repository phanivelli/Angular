var express = require('express');

var cors = require('cors')

var app =express();

var path = require('path');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var apis = require('./router/routerApi');

app.use(bodyParser.json());

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// app.use(express.static(__dirname + '/public'));

// app.use('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'public/index.html'))
// })

app.use('/',apis);

app.use(function (req,res,next) {
    res.status(404).send('sorry cant find that');
})

app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.status(500).send('something broke');
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(3000,function(){
    console.log('server started at port number 3000!!!');
    
})