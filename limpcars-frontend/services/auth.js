import api from "./api";

// Autenticação

export function loginAdmin(email, senha) {
  return api.post("/auth/login", { email, senha });
}
