const express=require('express')
const Routeuser=express.Router()
const { get, Post ,Put,getaById,Delete}=require('../Controll/userControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
//get user data
Routeuser.get('/',AuthernticateRoute(["Admin"]),get)

Routeuser.get('/:id',AuthernticateRoute(["Admin"]),getaById)
//post
Routeuser.post('/',AuthernticateRoute(["Admin"]),Post)
//put
Routeuser.put('/:id',AuthernticateRoute(["Admin"]),Put)
//delete
Routeuser.delete('/:id',AuthernticateRoute(["Admin"]),Delete)


module.exports = Routeuser