const express = require('express');
const router = express.Router();

const {index,admin}=require('../controllers/indexController')

/* GET home page. */
router.get('/',index);
router.get('/search');

module.exports = router;
