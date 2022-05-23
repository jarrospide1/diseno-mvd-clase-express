// llamo a express
const express = require('express');

// genero la app ejecutando express
const app = express();

// levanto el servidor
app.listen (3000, () => console.log('servidor corriendo en puerto 3000'));

// Configuración de archivos estáticos
app.use(express.static(__dirname + '/public'))

// Requerir archivos de rutas
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

const productRoutes = require('./routes/products')
app.use('/products', productRoutes);

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);





