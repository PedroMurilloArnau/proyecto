const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasteNoteSchema = new Schema(
        {
            beername: String,
            color: String,
            smell: String,
            tasteMoth: String,
            bitterness: String,
            aftertaste: String
});
module.exports = mongoose.model('tasteNote',tasteNoteSchema);