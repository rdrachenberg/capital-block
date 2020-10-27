const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = require('../config/config').secret;
const authCookieName = require('../config/config').authCookieName;
// const logger = require('morgan');


module.exports = (app) => {
    app.use(cookieParser(secret));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
};