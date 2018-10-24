var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ChampSchema = new Schema({
    name: String,
    saved: Boolean
});

module.exports = mongoose.model('Champ', ChampSchema);