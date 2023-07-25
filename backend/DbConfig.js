const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.pluralize(null)
const DbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://abdirhman:09870987A@cluster0.qkevzhc.mongodb.net/bata_house')
    console.log('database connected')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = DbConnect
