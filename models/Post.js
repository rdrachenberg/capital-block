const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const postSchema = new Schema({

    img: {
        type: String,
        required: true,
    },

    title:{
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now
    },
    
    author: [{
        type: ObjectId,
        ref: "User"
    }],


});

module.exports = new Model('Post', postSchema);