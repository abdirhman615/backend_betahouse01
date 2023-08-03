/* eslint-disable no-unused-vars */
const express = require('express')
const GETcontectRouter = express.Router()
const POSTcontectRouter = express.Router()
const DELETEcontectRouter = express.Router()
const PUTcontectRouter = express.Router()

// last ubdate

const { ContectModal } = require('../Models/contectModal')

GETcontectRouter.get('/', async (req, res) => {
  const Allcontect = await ContectModal.find()
  res.json({ Allcontect })
})
GETcontectRouter.get('/:id', async (req, res) => {
  const contectbyid = await ContectModal.findById()
  res.json({ contectbyid })
})

POSTcontectRouter.post('/', async (req, res) => {
  try {
    const newcontect = new ContectModal(req.body)
    await newcontect.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTcontectRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await ContectModal.findByIdAndUpdate(id, {
      guryaha: req.body.guryaha,
      pathim_age: req.body.pathim_age

    }, { new: true })

    res.send({ status: (200), messSalary: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

DELETEcontectRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await ContectModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

module.exports = { GETcontectRouter, DELETEcontectRouter, PUTcontectRouter, POSTcontectRouter }
