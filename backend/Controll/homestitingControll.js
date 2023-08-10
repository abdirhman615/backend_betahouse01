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
    const getabout = await HomestitingModal.find().sort({ '_id': -1 }).limit(1)

    if(getabout.length>0){
      const Updated = await HomestitingModal.findByIdAndUpdate(getabout[0]._id, 
        {
          
          

          Logo :req.body.Logo,
            Title :req.body.Title,
            Name :req.body.Name,
            address :req.body.address,
            email :req.body.email,
            phone :req.body.phone,
            whatapp :req.body.whatapp,
            Facebook :req.body.Facebook,
            Instagram :req.body.Instagram,
            tiktok :req.body.tiktok,
            Herotitle :req.body.Herotitle,
            HeroDiscritpion :req.body.HeroDiscritpion,
            HerImage :req.body.HerImage,
            Footertext :req.body.Footertext,

        },{new:true});
      // await postabout.save();
      res.status(200).send({message:"updated seceesfully"});
      
  
    }
    else{
      const postabout = await aboutModel(req.body);
      await postabout.save();
      res.status(201).send({ status: true, postabout, message: 'successfully saved' });
  

    }
   } catch (error) {
    res.status(404).send(error.message);
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
