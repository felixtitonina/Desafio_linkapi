require('dotenv').config()
require('./config/database')
const express = require('express')
const routes = require('./routes/pedidos.routes')
const bodyParser = require('body-parser')
const app = express()

app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/doc', express.static('./src/apidoc'))
// parse application/json
app.use(bodyParser.json())

app.use(routes)


module.exports = app
