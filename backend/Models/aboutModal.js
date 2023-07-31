const mongoose = require('mongoose');
const joi=require('joi')
const aboutShmea = new mongoose.Schema({
  FaahFaahin: {
    type: String,
    required: true,
  },
  FaahFaaahinYar: {
    type: String,
    required: true,
  },
},{timestamps:true});



// valiadtion
function Aboutvalidation(aboutOBj) {
    let aboutval = joi.object({
      FaahFaahin: joi.string().required(),
      FaahFaaahinYar: joi.string().required(),
    });
    return aboutval.validate(aboutOBj);
  }


const aboutModel = mongoose.model('About', aboutShmea);



module.exports = {
  aboutModel,
 Aboutvalidation,
};