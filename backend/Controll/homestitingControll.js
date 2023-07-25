/* eslint-disable no-unused-vars */
const express = require('express')
const GEThomestitingRouter = express.Router()
const POSThomestitingRouter = express.Router()
const DELETEhomestitingRouter = express.Router()
const PUThomestitingRouter = express.Router()
const HomestitingModal = require('../Models/home_page_Modal/homestitingModal')

GEThomestitingRouter.get('/', async (req, res) => {
  const Allhomestiting = await HomestitingModal.find()
  res.json({ Allhomestiting })
})
GEThomestitingRouter.get('/:id', async (req, res) => {
  const homestitingbyid = await HomestitingModal.findById()
  res.json({ homestitingbyid })
})

POSThomestitingRouter.post('/', async (req, res) => {
  try {
    const newhomestiting = new HomestitingModal(req.body)
    await newhomestiting.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUThomestitingRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await HomestitingModal.findByIdAndUpdate(id, {
      Title: req.body.Title,
      Logo: req.body.Logo,
      Name: req.body.Name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      whatapp: req.body.whatapp,
      Facebook: req.body.Facebook,
      Instagram: req.body.Instagram,
      tiktok: req.body.tiktok,
      Herotitle: req.body.Herotitle,
      HeroDiscritpion: req.body.HeroDiscritpion,
      HerImage: req.body.HerImage,
      Footertext: req.body.Footertext

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

DELETEhomestitingRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await HomestitingModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
    res.send(error.message)
  }
})

module.exports = { GEThomestitingRouter, DELETEhomestitingRouter, PUThomestitingRouter, POSThomestitingRouter }
