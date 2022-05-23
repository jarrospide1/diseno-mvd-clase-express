// Requiero express
const express = require('express');

// Le pido a express ejecutar el metodo Router
const router = express.Router();

//requiero el controlador del mail
const mainController = require('../controllers/main');

// Ruta a la home
router.get('/', mainController.show);

// Exporto el ruteador
module.exports = router;