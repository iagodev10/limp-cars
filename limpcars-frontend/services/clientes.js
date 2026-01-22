import api from "./api";

// Clientes

export function listarClientes() {
  return api.get("/clientes");
}

export function criarCliente(dados) {
  // dados: { nome, telefone }
  return api.post("/clientes", dados);
}

export function atualizarCliente(id, dados) {
  // dados: { nome, telefone }
  return api.put(`/clientes/${id}`, dados);
}

export function deletarCliente(id) {
  return api.delete(`/clientes/${id}`);
}