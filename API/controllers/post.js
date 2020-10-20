const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.Post.find()
            .then((posts) => res.send(posts))
            .catch(next);
    },

    post: (req, res, next) => {
        const { img, title, text, author} = req.body;
        const  _id  = req.body.author;
        console.log(_id);
        // console.log(_id)
        // let cookieToken = re.cookie.get(config.authCookieName);
        // const token = utils.jwt.verifyToken(cookieToken);
        // console.log(token)

        models.Post.create({ author: _id })
            .then((createdPost) => {
                console.log(createdPost);
                
                return Promise.all(
                    [models.User.updateOne({ _id }, { $push: { posts: createdPost } }),
                    models.Post.findOne({ _id: createdPost._id })]
                )
            })
            .then((modifiedObj, postObject) => {
                res.send(postObject);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Post.updateOne({ _id: id }, { description })
            .then((updatedPost) => res.send(updatedPost))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Post.deleteOne({ _id: id })
            .then((removedPost) => res.send(removedPost))
            .catch(next)
    }
};