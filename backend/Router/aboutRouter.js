const express = require('express');
const {
  get, Post ,getaById,
} = require('../Controll/aboutControll');
const router = express.Router();
const {AuthernticateRoute}=require('./AutherncationMiddleWare')
router.get('/', get);
router.get('/:id',AuthernticateRoute(["SuperAdmin","Admin"]), getaById);

router.post('/',AuthernticateRoute(["SuperAdmin","Admin"]), Post);

module.exports = router;