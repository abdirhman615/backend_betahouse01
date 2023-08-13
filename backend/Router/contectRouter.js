const express = require('express')
const contectRouter = express.Router()
const { GETcontectRouter, POSTcontectRouter, DELETEcontectRouter, PUTcontectRouter } = require('../Controll/contectControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')

contectRouter.get('/',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), GETcontectRouter)

contectRouter.post('/',POSTcontectRouter)

contectRouter.put('/:id',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), PUTcontectRouter)

contectRouter.delete('/:id',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), DELETEcontectRouter)

module.exports = contectRouter
