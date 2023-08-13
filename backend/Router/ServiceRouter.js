const express = require('express')
const ServiceRouter = express.Router()
const { GETServiceRouter, POSTServiceRouter, DELETEServiceRouter, PUTServiceRouter } = require('../Controll/ServiceControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
ServiceRouter.get('/', GETServiceRouter)

ServiceRouter.post('/',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), POSTServiceRouter)

ServiceRouter.put('/:id',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), PUTServiceRouter)

ServiceRouter.delete('/:id',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), DELETEServiceRouter)

module.exports = ServiceRouter
