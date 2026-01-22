const express = require('express');
const router = express.Router();
const agendamentosController = require('../controllers/agendamentosController');

router.get('/', agendamentosController.listarAgendamentos);
router.get('/:id', agendamentosController.obterAgendamento);
router.post('/', agendamentosController.criarAgendamento);
router.put('/:id', agendamentosController.atualizarAgendamento);
router.delete('/:id', agendamentosController.deletarAgendamento);

module.exports = router;
