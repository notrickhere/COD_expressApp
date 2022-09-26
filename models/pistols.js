const mongoose = require('mongoose')

const pistolSchema = new mongoose.Schema({
    manufacturer: {type: String, required: true},
    model:{type: String, required:true},
    isPistolBroken: Boolean
})

const Pistol = mongoose.model('Pistol', pistolSchema)

module.exports = Pistol