// Requiero express
const express = require('express');

// Le pido a express ejecutar el metodo Router
const router = express.Router();

// Requiero el controlador de usuarios
const usersControllers = require('../controllers/users')

// Rutas de productos
router.get('/', usersControllers.show);

router.get('/create', usersControllers.create);

// Exporto el ruteador
module.exports = router;