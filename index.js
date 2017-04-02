var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var bodyParser = require('body-parser');

// Why is this not in the framework? I don't know.
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
    // Dirty butfuckit
    res.send(
        '<h1>Please login below</h1><form action="/" method="post">' +
        '<input id="email" name="email"></input>' +
        '<input id="extra" name="extra"></input>' +
        '<button>Login</button></form>'
    );
});

app.post('/', function(req, res){

    var email = req.body.email;
    var password = req.body.extra;
    
    url = 'https://auth.uber.com/login';
    var request = require('request'); //scoping hell
    var request = request.defaults({jar: true}) // Store the cookieeeeesss

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            console.log($('.text-input'))

            $('.header').filter(function(){

                var data = $(this);

                title = data.children().first().text();


                json.title = title;
            })
        }
    })
})

app.listen('8181')
exports = module.exports = app;