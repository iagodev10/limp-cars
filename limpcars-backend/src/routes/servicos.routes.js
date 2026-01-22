const express = require('express')
const router = express.Router();

const servicosController = require('../controllers/servicosController')

router.get('/', servicosController.listar)

router.post('/', servicosController.criar)

router.put('/:id', servicosController.atualizar)

router.patch('/:id/status', servicosController.alterarStatus);

module.exports = router;