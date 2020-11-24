const env = process.env.NODE_ENV || 'development';
const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/capital-block';
const port = process.env.PORT || 8080;
const secret = process.env.SECRET;

const config = {
    development: {
        port: port,
        dbURL: dbURL,
        authCookieName: 'x-auth-token',
        loggedIn: 'true',
        secret: secret
    },
    production: {
        port: port,
        dbURL: dbURL,
        authCookieName: 'x-auth-token',
        loggedIn: 'false',
        secret: secret
    }
};

module.exports = config[env];