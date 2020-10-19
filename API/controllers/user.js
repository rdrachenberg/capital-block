const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { name, email, password, date } = req.body;
            // console.log(name);
            // console.log(password);
            models.User.create({ name, email, password, date })
                .then((createdUser) => {
                    console.log(createdUser);
                    // res.send(createdUser)

                    const token = utils.jwt.createToken({ id: createdUser._id });
                    res.cookie(config.authCookieName, token).send(createdUser);
                    
                    // console.log(token);
                })
                .catch(next)
        },

        login: (req, res, next) => {
            const { email, password } = req.body;
            // console.log(password);
            models.User.findOne({ email:email })
                .then((user) =>{
                    Promise.all(password, user.matchPassword(password))
                    let match = Promise.all(password, user.matchPassword(password))
                    console.log(user);
                    // console.log(match);
                    if(!match){
                        console.log('wrong password');
                        res.send(404);
                    } else {
                        const token = utils.jwt.createToken({ id: user._id });
                        res.cookie(config.authCookieName, token, {httpOnly:true});
                        console.log('cookie was created mo fo');
                        // console.log(token);
                        res.json({token});
                        // next();
                    }
                }).catch(next);
                
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { name, password } = req.body;
        models.User.update({ _id: id }, { name, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};