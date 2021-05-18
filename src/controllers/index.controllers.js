const router = require("../routes/index.routes")

const indexCtrl = {}

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
}


indexCtrl.renderContacto = (req, res) => {
    res.render('contacto')
}

module.exports = indexCtrl