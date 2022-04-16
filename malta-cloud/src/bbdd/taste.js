const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasteSchema = new Schema({
    name: String,
    type: String,
    taster: String,
    students:({
        name: String,
    }),
    date: Date,
    duration: Number,
    state: Boolean,
})

module.exports = mongoose.model('taste',tasteSchema);