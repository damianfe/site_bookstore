const express = require('express');
const router = express.Router();

const {detail, cart, products, creation, edit, update, erase, search, store} =require('../controllers/productsController');

/* /products */

/* listado de productos */
router.get('/',products)
router.get('/search', search);

/* formulario y creacion de productos */
router.get('/creation', creation);
router.post('/creation', store);

/* carrito */
router.get('/cart', cart);

/* detalle de producto */
router.get('/detail/:id',detail);

/* formulario y edicion de producto */
router.get('/edit/:id', edit);
router.put('/update/:id', update);

/* Eliminar un producto */
router.delete('/delete/:id', erase)



module.exports = router;