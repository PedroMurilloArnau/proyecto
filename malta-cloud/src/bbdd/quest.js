const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id: Number,
    creator: String,
    question: String,
    questions:[{name:String,value:Boolean}],
    date: Date,
    status: Boolean,
    topic:[{name:String}]
})

module.exports = mongoose.model('questionGame',questionSchema)