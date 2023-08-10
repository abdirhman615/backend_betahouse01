const express = require('express')
const homestitingRouter = express.Router()
const { GEThomestitingRouter, POSThomestitingRouter, DELETEhomestitingRouter, PUThomestitingRouter } = require('../Controll/homestitingControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
homestitingRouter.get('/', GEThomestitingRouter)

homestitingRouter.post('/',AuthernticateRoute(["Admin"]), POSThomestitingRouter)

homestitingRouter.put('/:id',AuthernticateRoute(["Admin"]), PUThomestitingRouter)

homestitingRouter.delete('/:id',AuthernticateRoute(["Admin"]), DELETEhomestitingRouter)

module.exports = homestitingRouter
