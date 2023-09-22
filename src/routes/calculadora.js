const express = require('express')
const controllerCalculadora = require('../controllers/calculadora')

const controller = new controllerCalculadora()
const router = express.Router()
router.post('/api/calculadora/operacaoSomar', controller.operacaoSomar)
router.post('/api/calculadora/operacaoDiminuir', controller.operacaoDiminuir)
router.post('/api/calculadora/operacaoMultiplicar', controller.operacaoMultiplicar)
router.post('/api/calculadora/operacaoDividir', controller.operacaoDividir)
router.post('/api/calculadora/operacaoPotencia', controller.operacaoPotencia)
router.post('/api/calculadora/operacaoRaiz', controller.operacaoRaiz)

module.exports = router