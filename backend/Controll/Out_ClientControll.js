/* eslint-disable no-unused-vars */
const express = require('express')
const GETOutClientRouter = express.Router()
const POSTOutClientRouter = express.Router()
const DELETEOutClientRouter = express.Router()
const PUTOutClientRouter = express.Router()
const OutClientModal = require('../Models/home_page_Modal/Out_ClientModal')

GETOutClientRouter.get('/', async (req, res) => {
  const AllOutClient = await OutClientModal.find()
  res.json({ AllOutClient })
})
GETOutClientRouter.get('/:id', async (req, res) => {
  const OutClientbyid = await OutClientModal.findById()
  res.json({ OutClientbyid })
})

POSTOutClientRouter.post('/', async (req, res) => {
  try {
    const newOutClient = new OutClientModal(req.body)
    await newOutClient.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTOutClientRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await OutClientModal.findByIdAndUpdate(id, {
      name: req.body.name,
      clientlogo: req.body.clientlogo

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

DELETEOutClientRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await OutClientModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

module.exports = { GETOutClientRouter, DELETEOutClientRouter, PUTOutClientRouter, POSTOutClientRouter }
