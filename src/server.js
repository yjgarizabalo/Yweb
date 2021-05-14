const express = require('express')
const exphbs = require('express-handlebars')
const { extname } = require('path')
const path = require('path')


// Inicializaciones
const app = express()

// Configuraciones
app.set('port', process.env.PORT || 7778)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir:  path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'components'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({extended: false}))

// Variables globales

// Rutas
app.get('/', (req, res) => {
    res.render('index')
})

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app