const express = require('express')
const imagesRouter = express.Router()
const { GETimagesRouter,GETimagesRouterByID, POSTimagesRouter, DELETEimagesRouter, PUTimagesRouter } = require('../Controll/imagesControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
imagesRouter.get('/', GETimagesRouter)

imagesRouter.get('/:id', GETimagesRouterByID)

imagesRouter.post('/',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), POSTimagesRouter)

imagesRouter.put('/:id',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), PUTimagesRouter)

imagesRouter.delete('/:id',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), DELETEimagesRouter)

module.exports = imagesRouter
