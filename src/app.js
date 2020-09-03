const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser')
require('dotenv').config()
require('./config/database')
const app = express();


app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(routes)


module.exports = app
