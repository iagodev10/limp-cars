import axios from "axios";

// Vite: variáveis expostas no frontend precisam começar com VITE_
// Configure VITE_API_BASE_URL no arquivo .env
const baseURL = import.meta.env?.VITE_API_BASE_URL;

if (!baseURL) {
  throw new Error(
    "VITE_API_BASE_URL não está configurada. " +
    "Configure a variável de ambiente VITE_API_BASE_URL no arquivo .env"
  );
}

const api = axios.create({
  baseURL,
});

export default api;