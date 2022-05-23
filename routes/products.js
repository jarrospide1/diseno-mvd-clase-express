// Requiero express
const express = require('express');

// Le pido a express ejecutar el metodo Router
const router = express.Router();

// requiero el controller
const productsController = require('../controllers/products')

// Rutas de productos
router.get('/', productsController.show);

router.get('/create', productsController.create);

router.get('/:id', productsController.detail)

// Exporto el ruteador
module.exports = router;