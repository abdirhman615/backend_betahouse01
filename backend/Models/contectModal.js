const mongoose = require('mongoose')

mongoose.pluralize(null)
const contectSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  massage: {
    type: String,
    required: true
  }

}, { timestamps: true })

const ContectModal = mongoose.models.contect || mongoose.model('contect', contectSchema)
module.exports = { ContectModal }
