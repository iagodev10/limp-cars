import api from "./api";

// Agendamentos

export function listarAgendamentos() {
  return api.get("/agendamentos");
}

export function obterAgendamento(id) {
  return api.get(`/agendamentos/${id}`);
}

export function criarAgendamento(dados) {
  // dados: { cliente_id, data_atendimento, hora_atendimento, status?, observacoes?, servicos?: [{ servico_id, valor_cobrado? }] }
  return api.post("/agendamentos", dados);
}

export function atualizarAgendamento(id, dados) {
  // mesmos campos de criarAgendamento
  return api.put(`/agendamentos/${id}`, dados);
}

export function deletarAgendamento(id) {
  return api.delete(`/agendamentos/${id}`);
}