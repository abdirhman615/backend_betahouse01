const mongoose = require('mongoose')

const ImagegallarySchema = new mongoose.Schema({
  img_title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true })

const ImagegallaryModal = mongoose.model('Imagegallary', ImagegallarySchema)

module.exports = ImagegallaryModal
