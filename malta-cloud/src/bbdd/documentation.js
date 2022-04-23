const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const documentationSchema = new Schema({
    id: Number,
    title: String,
    author: String,
    anonimus: Boolean,
    articleTitle: String,
    articleImage: String,
    articleText: String,
    bibliography: String,
});

module.exports = mongoose.model('documentation',documentationSchema );