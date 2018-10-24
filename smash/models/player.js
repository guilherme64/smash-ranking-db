var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlayerSchema = new Schema({
    name: String,
    score: Number
});

module.exports = mongoose.model('Player', PlayerSchema);