const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    autic: Boolean,
    name: String,
    surname: String,
    email: String,
    password: String,
    type: String,
    code: Number,
    birthdate: Date,
});
module.exports = mongoose.model('users',userSchema);