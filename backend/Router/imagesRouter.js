const express = require('express')
const imagesRouter = express.Router()
const { GETimagesRouter,GETimagesRouterByID, POSTimagesRouter, DELETEimagesRouter, PUTimagesRouter } = require('../Controll/imagesControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
imagesRouter.get('/',AuthernticateRoute(["Admin"]), GETimagesRouter)

imagesRouter.get('/:id', GETimagesRouterByID)

imagesRouter.post('/',AuthernticateRoute(["Admin"]), POSTimagesRouter)

imagesRouter.put('/:id',AuthernticateRoute(["Admin"]), PUTimagesRouter)

imagesRouter.delete('/:id',AuthernticateRoute(["Admin"]), DELETEimagesRouter)

module.exports = imagesRouter
