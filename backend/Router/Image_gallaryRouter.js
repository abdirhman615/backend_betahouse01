const express = require('express')
const ImagegallaryRouter = express.Router()
const { GETImagegallaryRouter, POSTImagegallaryRouter, DELETEImagegallaryRouter, PUTImagegallaryRouter } = require('../Controll/Image_gallaryControll')

ImagegallaryRouter.get('/', GETImagegallaryRouter)

ImagegallaryRouter.post('/', POSTImagegallaryRouter)

ImagegallaryRouter.put('/:id', PUTImagegallaryRouter)

ImagegallaryRouter.delete('/:id', DELETEImagegallaryRouter)

module.exports = ImagegallaryRouter
