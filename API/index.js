require ('dotenv').config()
const config = require('./config/config');
const dbConnection = require('./config/database');
const express = require('express');

const app = require('express')();

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });
    // Join folders
    app.use(express.static(path.join(__dirname, 'build')));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'API')));
    // Use folders
    app.use(express.static('build'));
    app.use(express.static('public'));
    app.use(express.static('API'));

      // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '/build', 'index.html'));
        });

    app.listen(config.port, console.log(`🌎 ==> API Server Listening on port ${config.port}! 🌎`))

}).catch(console.error);