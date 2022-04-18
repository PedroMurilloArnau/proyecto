const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasteSchema = new Schema({
    name: String,
    type: String,
    taster: String,
    students: Number,
    studient:[{name: String}],
    placesAvailable: Number,
    bier1Name: String,
    bier2Name: String,
    bier3Name: String,
    bier4Name: String,
    date: Date,
    duration: Number,
    state: Boolean,
})

module.exports = mongoose.model('taste',tasteSchema);