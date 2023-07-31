const express = require('express');
const {
  get, Post ,getaById,
} = require('../Controll/aboutControll');
const router = express.Router();

router.get('/', get);
router.get('/:id', getaById);

router.post('/', Post);

module.exports = router;