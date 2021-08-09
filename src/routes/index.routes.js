const { Router } = require('express')
const router = Router()

const { renderIndex, renderContacto, renderDesarrolloWebBarranquilla } = require('../controllers/index.controllers')

router.get('/', renderIndex)

router.get('/contacto', renderContacto)

router.get('/desarrollo-web-barranquilla', renderDesarrolloWebBarranquilla)

module.exports = router