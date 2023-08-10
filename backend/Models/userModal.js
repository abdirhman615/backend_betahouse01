const mongoose = require('mongoose')
const joi = require('joi')
mongoose.pluralize(null)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  userStatus: {
    type: String,
    enum: ['active', 'pending', 'blocked']
  },
  Role: {
    type: String,
    default:"user",
    required: true
  }

}, { timestamps: true })

const UserModal = mongoose.models.users || mongoose.model('users', userSchema)
const UserRegValidate = (userData) => {
  const user = joi.object({

    name: joi.string().required(),
    username: joi.string().required(),
    Password: joi.string().required().min(3),
    userStatus: joi.string().required(),
    Role: joi.string().required()
  })
  return user.validate(userData)
}

const LoginValidate = (userData) => {
  const user = joi.object({
    username: joi.string().required(),
    Password: joi.string().required().min(3)
  })
  return user.validate(userData)
}

module.exports = { UserModal, UserRegValidate, LoginValidate }
