const { Router } = require('express')
const router = Router()

const { renderIndex, renderContacto } = require('../controllers/index.controllers')

router.get('/', renderIndex)

router.get('/contacto', renderContacto)

module.exports = router