var Express    = require('express');
var bodyParser = require('body-parser');
var session    = require('express-session');
var mongojs    = require('mongojs');

var File = require('./lib/file/File.js');

var app = Express();
var db = mongojs.connect("mongodb://localhost:27017/homeautomation", ["login"]);
var path = __dirname;

var APP_PORT = 5000;

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(Express.static(path + '/public/'));
app.use(session({secret: 'h673bo092s7m0iw'}));

app.set('views', path + '/views');
app.engine('ejs', require('ejs').renderFile); //or html

app.get('/pi', function (req,res)
{
    if(req.session.login != undefined && req.session.login == true)
    {
        var file = new File();
        var gpio = file.loadJSON('gpio.json');
        file.loadJSON('gpio.json');

        console.dir(gpio);

        res.render('index2.ejs', {
            hostname: '//' + req.headers.host,
            username: req.session.username,
            gpio: JSON.stringify(gpio)
        });
    }
    else
        res.render('login.ejs', { hostname:'//' + req.headers.host });
});

app.all('/login', function (req,res)
{
    if(req.method == 'POST')
    {
        db.login.findOne(function(err,doc)
        {
            var user = req.body.username.toLowerCase();
            var password = req.body.password.toLowerCase();

            if (user == doc.username && password == doc.password)
            {
                var file = new File();
                var gpio = file.loadJSON('gpio.json');

                req.session.login = true;
                req.session.username = doc.username;

                res.render('index2.ejs', {
                    hostname: '//' + req.headers.host,
                    username: doc.username,
                    gpio: JSON.stringify(gpio)
                });
            }
            else
                res.render('login.ejs', { hostname:'//' + req.headers.host });
        });
    }
    else
        res.render('login.ejs', { hostname:'//' + req.headers.host });
});

app.get('/logout', function (req,res)
{
    req.session.login = false;
    req.session.username = null;

    res.render('login.ejs', { hostname:'//' + req.headers.host });
});

app.listen(APP_PORT);