const express = require('express')
const homestitingRouter = express.Router()
const { GEThomestitingRouter, POSThomestitingRouter, DELETEhomestitingRouter, PUThomestitingRouter } = require('../Controll/homestitingControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
homestitingRouter.get('/', GEThomestitingRouter)

homestitingRouter.post('/',AuthernticateRoute(["SuperAdmin","Admin"]), POSThomestitingRouter)

homestitingRouter.put('/:id',AuthernticateRoute(["SuperAdmin","Admin"]), PUThomestitingRouter)

homestitingRouter.delete('/:id',AuthernticateRoute(["SuperAdmin","Admin"]), DELETEhomestitingRouter)

module.exports = homestitingRouter
