const express = require('express')
const contectRouter = express.Router()
const { GETcontectRouter, POSTcontectRouter, DELETEcontectRouter, PUTcontectRouter } = require('../Controll/contectControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')

contectRouter.get('/',AuthernticateRoute(["Admin"]), GETcontectRouter)

contectRouter.post('/', POSTcontectRouter)

contectRouter.put('/:id', PUTcontectRouter)

contectRouter.delete('/:id', DELETEcontectRouter)

module.exports = contectRouter
