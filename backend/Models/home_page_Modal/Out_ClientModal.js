const mongoose = require('mongoose')

const OutClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  clientlogo: {
    type: String,
    required: true
  }
}, { timestamps: true })

const OutClientModal = mongoose.model('Out_Client', OutClientSchema)

module.exports = OutClientModal
