const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    name: String,
    stock: Number,
    priceUni: Number,
    image: String,
    biertype: String,
});
module.exports = mongoose.model('beers',beerSchema);