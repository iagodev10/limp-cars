import api from "./api";

// Serviços

export function listarServicos() {
  return api.get("/servicos");
}

export function criarServico(dados) {
  // dados: { nome, descricao?, valor, imagem_url?, duracao_minutos }
  return api.post("/servicos", dados);
}

export function atualizarServico(id, dados) {
  // dados: { nome, descricao?, valor, imagem_url?, duracao_minutos }
  return api.put(`/servicos/${id}`, dados);
}

export function alterarStatusServico(id, ativo) {
  // ativo: boolean (true/false)
  return api.patch(`/servicos/${id}/status`, { ativo });
}

export function deletarServico(id) {
  // Se o backend não tiver rota DELETE para serviço, esta função pode ser ajustada depois
  return api.delete(`/servicos/${id}`);
}