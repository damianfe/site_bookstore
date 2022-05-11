const express = require('express');
const router = express.Router();

const {detail, cart, products, creation, edit} =require('../controllers/productsController');

/* /products */
router.get('/detail/:id',detail);
router.get('/cart', cart);
router.get('/products', products);
router.get('/creation', creation);
router.get('/edit', edit);

module.exports = router;