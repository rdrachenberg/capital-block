const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    // console.log('this was hit!');
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};