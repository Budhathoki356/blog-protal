const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: true
    },
    short_description: {
        type: String
    }
});

const BlogModel = mongoose.model('blog', BlogSchema)

module.exports = BlogModel;