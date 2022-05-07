const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id: Number,
    date: Date,
    gamer: String,
    puntuation: Number,
});

module.exports = mongoose.model('games',gameSchema);