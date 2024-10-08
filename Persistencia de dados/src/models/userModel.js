const mongoose = require('mongoose')
const { type } = require('os')
const Schema = mongoose.Schema
let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    age: {type: Number, required: true}
})

module.exports = mongoose.model('User', UserSchema) 