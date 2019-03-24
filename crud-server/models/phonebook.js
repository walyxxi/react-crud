var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Phonebook = new Schema({
    id: String,
    name: String,
    phone: String
})

module.exports = mongoose.model('Phonebook', Phonebook);