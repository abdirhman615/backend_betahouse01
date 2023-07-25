const mongoose = require('mongoose')

mongoose.pluralize(null)
const imagesSchema = new mongoose.Schema({
  guryaha_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'guryaha',
    required: true
  }

  // pathim_age:{
  //     type:String,
  //     required:true
  // }

}, { timestamps: true })

const ImagesModal = mongoose.models.images || mongoose.model('images', imagesSchema)
module.exports = { ImagesModal }
