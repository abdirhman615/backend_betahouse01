const express = require('express')
const guryahaRouter = express.Router()
const { GETguryahaRouter, POSTguryahaRouter, DELETEguryahaRouter, PUTguryahaRouter } = require('../Controll/guryahaControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')

guryahaRouter.get('/', GETguryahaRouter)

guryahaRouter.post('/',AuthernticateRoute(["Admin"]), POSTguryahaRouter)

guryahaRouter.put('/:id',AuthernticateRoute(["Admin"]), PUTguryahaRouter)

guryahaRouter.delete('/:id',AuthernticateRoute(["Admin"]), DELETEguryahaRouter)

module.exports = guryahaRouter
