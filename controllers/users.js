const controller = {

    show: (req, res) => {
        res.send('Vas a ver los usuarios')
    },

    create: (req, res) => {
        res.send('vamos a crear un usuario')
    }
}

module.exports = controller;