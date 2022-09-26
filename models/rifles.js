const mongoose = require('mongoose')

const rifleSchema = new mongoose.Schema({
    manufacturer: {type: String, required: true},
    model:{type: String, required:true},
    isRifleBroken: Boolean
})

const Rifle = mongoose.model('Rifle', rifleSchema)

module.exports = Rifle