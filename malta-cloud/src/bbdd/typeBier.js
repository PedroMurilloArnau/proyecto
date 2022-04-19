const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeBierSchema = new Schema({
    type: String,
});
module.exports = mongoose.model('typeBier',typeBierSchema);