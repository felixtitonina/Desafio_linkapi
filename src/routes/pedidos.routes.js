const express = require('express')
const router = express.Router()

const oportunitiesController = require('../controllers/pedidos.controller')

router.post('/pedidos', oportunitiesController.integrationOrderWon)

router.get('/pedidos', oportunitiesController.finAllOrderWon)

router.get('/pedidos-findDate', oportunitiesController.findDate)

module.exports = router