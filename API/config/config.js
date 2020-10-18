const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 8080,
        dbURL: 'mongodb://localhost:27017/capital-block',
        authCookieName: 'x-auth-token',
        loggedIn: 'false',
        secret: process.env.SECRET
    },
    production: {}
};

module.exports = config[env];