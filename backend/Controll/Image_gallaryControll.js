/* eslint-disable no-unused-vars */
const express = require('express')
const GETImagegallaryRouter = express.Router()
const POSTImagegallaryRouter = express.Router()
const DELETEImagegallaryRouter = express.Router()
const PUTImagegallaryRouter = express.Router()
const ImagegallaryModal = require('../Models/home_page_Modal/Image_gallaryModal')

GETImagegallaryRouter.get('/', async (req, res) => {
  const AllImagegallary = await ImagegallaryModal.find()
  res.json({ AllImagegallary })
})
GETImagegallaryRouter.get('/:id', async (req, res) => {
  const Imagegallarybyid = await ImagegallaryModal.findById()
  res.json({ Imagegallarybyid })
})

POSTImagegallaryRouter.post('/', async (req, res) => {
  try {
    const newImagegallary = new ImagegallaryModal(req.body)
    await newImagegallary.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTImagegallaryRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await ImagegallaryModal.findByIdAndUpdate(id, {
      img_title: req.body.img_title,
      Imagegallary: req.body.Imagegallary

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

DELETEImagegallaryRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await ImagegallaryModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

module.exports = { GETImagegallaryRouter, DELETEImagegallaryRouter, PUTImagegallaryRouter, POSTImagegallaryRouter }
