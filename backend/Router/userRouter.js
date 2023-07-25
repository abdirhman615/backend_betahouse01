/* eslint-disable no-unused-vars */
const express = require('express')
const userRouter = express.Router()
const { UserModal, UserRegValidate } = require('../Models/userModal')
const bcrypt = require('bcrypt')

userRouter.get('/', async (req, res) => {
  try {
    const Allusers = await UserModal.find()
    res.json({ Allusers })
  } catch (error) {
    res.status(400).send(error.message)
    res.json(error.message)
  }
})

userRouter.post('/', async (req, res) => {
  try {
    const { error } = UserRegValidate(req.body)
    if (error) return res.json(error.message)
    const newuser = new UserModal(req.body)
    const salt = await bcrypt.genSalt(10)
    newuser.Password = await bcrypt.hash(newuser.Password, salt)
    await newuser.save()

    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

userRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await UserModal.findByIdAndUpdate(id, {
      username: req.body.username,
      Password: req.body.Password,
      userStatus: req.body.userStatus,
      Role: req.body.Role

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

userRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await UserModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

module.exports = userRouter
