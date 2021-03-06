const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = require('../config/config').secret;
const authCookieName = require('../config/config').authCookieName;
const express = require('express');
const path = require('path');


module.exports = (app) => {
    const corsOptions = {
        origin: "https://capital-block.herokuapp.com", // https://capital-block.herokuapp.com
        optionsSuccessStatus: 200
    };

    app.use(cors(corsOptions));
    app.disable('x-powered-by');

    app.use(function(req, res, next, err) {
        // Website to allow to connect  || 'http://localhost:3000' 'https://capital-block.herokuapp.com/' || 
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // True if the website needs to include cookies in the requests sent
        // to the API (e.g. in case of sessions use)
        res.setHeader('Access-Control-Allow-Credentials', true);
        // Request headers to allow
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // Pass to next layer of middleware
        next();
    });

    app.use(express.static(path.join(__dirname, '../client/build')));
    app.use(express.static(path.join(__dirname, '../client/public')));
    console.log(authCookieName); // will use later for successful login and name cookie. 

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    app.use(cookieParser(secret));
};