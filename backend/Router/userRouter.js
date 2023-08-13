const express=require('express')
const Routeuser=express.Router()
const { get, Post ,Put,getaById,Delete}=require('../Controll/userControll')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
//get user data
Routeuser.get('/',AuthernticateRoute(["SuperAdmin","Admin"]),get)

Routeuser.get('/:id',AuthernticateRoute(["SuperAdmin"]),getaById)
//post
Routeuser.post('/',AuthernticateRoute(["SuperAdmin","Admin"]),Post)
//put
Routeuser.put('/:id',AuthernticateRoute(["SuperAdmin"]),Put)
//delete
Routeuser.delete('/:id',AuthernticateRoute(["SuperAdmin"]),Delete)


module.exports = Routeuser