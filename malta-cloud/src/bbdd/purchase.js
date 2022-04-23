const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    id: Number,
    date: Date,
    biling: Number,
    biers:[{
        name: String,
        amount: Number,
        }],
    price: Number,
    user: String,
});

module.exports = mongoose.model('purchase',purchaseSchema );
