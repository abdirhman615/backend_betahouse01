const express = require('express')
const OutClientRouter = express.Router()
const { GETOutClientRouter, POSTOutClientRouter, DELETEOutClientRouter, PUTOutClientRouter } = require('../Controll/Out_ClientControll')

OutClientRouter.get('/', GETOutClientRouter)

OutClientRouter.post('/', POSTOutClientRouter)

OutClientRouter.put('/:id', PUTOutClientRouter)

OutClientRouter.delete('/:id', DELETEOutClientRouter)

module.exports = OutClientRouter
