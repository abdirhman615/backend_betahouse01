const express = require('express')
const OutClientRouter = express.Router()
const { GETOutClientRouter, POSTOutClientRouter, DELETEOutClientRouter, PUTOutClientRouter ,getById} = require('../Controll/Out_ClientControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
OutClientRouter.get('/', GETOutClientRouter)
OutClientRouter.get('/:id', getById)

OutClientRouter.post('/',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), POSTOutClientRouter)

OutClientRouter.put('/:id',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), PUTOutClientRouter)

OutClientRouter.delete('/:id',AuthernticateRoute(["SuperAdmin","Admin","CustomerCare"]), DELETEOutClientRouter)

module.exports = OutClientRouter
