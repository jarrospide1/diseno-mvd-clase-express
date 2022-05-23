const path = require('path');

const controller = {

    show: (req, res) => {
        const htmlPath = path.resolve(__dirname, '../views/products.html')
        res.sendFile(htmlPath);
    },
    
    create: (req, res) => {
        res.send('vamos a crear un product');
    },

    // generamos una ruta parametrizada con el id que pongamos en la url
    detail: (req, res) => {
        res.send('viendo el producto' + req.params.id)
    }

}

module.exports = controller;

