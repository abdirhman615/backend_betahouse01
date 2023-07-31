const express = require('express')
const OutClientRouter = express.Router()
const { GETOutClientRouter, POSTOutClientRouter, DELETEOutClientRouter, PUTOutClientRouter ,getById} = require('../Controll/Out_ClientControll')

OutClientRouter.get('/', GETOutClientRouter)
OutClientRouter.get('/:id', getById)

OutClientRouter.post('/', POSTOutClientRouter)

OutClientRouter.put('/:id', PUTOutClientRouter)

OutClientRouter.delete('/:id', DELETEOutClientRouter)

module.exports = OutClientRouter
