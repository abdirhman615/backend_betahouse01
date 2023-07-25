const express = require('express')
const loginRouter = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userModal, LoginValidate } = require('../Models/userModal')

loginRouter.post('/', async (req, res) => {
  try {
    const { error } = LoginValidate(req.body)
    if (error) return res.json(error.message)
    const UserEmail = await userModal.findOne({ Email: req.body.Email })
    if (!UserEmail) return res.json('usernamr Not Fonud')

    const checkpaas = await bcrypt.compare(req.body.Password, UserEmail.Password)
    if (!checkpaas) return res.json('incorect Emali or Password')

    const token = jwt.sign({ id: UserEmail._id, name: UserEmail.Email },
      process.env.SECRET_KEY)
    res.json({ login: 'successfull', token })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})
module.exports = loginRouter
