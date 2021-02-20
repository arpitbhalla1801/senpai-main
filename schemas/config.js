const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Guild: String,
    Prefix: String,
    Schannel: String,
    Rchannel: String,
    Wchannel: String
})

module.exports = mongoose.model('settings', Schema)