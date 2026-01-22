# 🔒 Configuração de Variáveis de Ambiente - Frontend

## Configuração Local

1. Copie o arquivo `ENV.example` para `.env`:
   ```bash
   cp ENV.example .env
   ```

2. Edite o arquivo `.env` e configure a URL da API:
   ```
   VITE_API_BASE_URL=http://localhost:3333/api
   ```

   Para produção:
   ```
   VITE_API_BASE_URL=https://limpcars-oficial-1.onrender.com/api
   ```

## ⚠️ Importante

- O arquivo `.env` está no `.gitignore` e **NÃO será commitado**
- Variáveis no Vite precisam começar com `VITE_` para serem expostas no frontend
- Após alterar o `.env`, reinicie o servidor de desenvolvimento (`npm run dev`)

## Build de Produção

Durante o build, o Vite incorpora as variáveis de ambiente no código. Certifique-se de que o `.env` está configurado antes de executar `npm run build`.

## No Netlify

1. Acesse o painel do Netlify
2. Vá em **Site settings → Build & deploy → Environment**
3. Adicione a variável:
   - `VITE_API_BASE_URL`: `https://limpcars-oficial-1.onrender.com/api`
4. Adicione também (para evitar falsos positivos no scanner de segredos):
   - `SECRETS_SCAN_OMIT_KEYS`: `VITE_API_BASE_URL`

**Nota:** O arquivo `netlify.toml` já está configurado para ignorar `VITE_API_BASE_URL` no scanner de segredos, pois URLs de API não são segredos sensíveis.

## No Render

Se você estiver fazendo deploy do frontend separadamente, configure a variável de ambiente `VITE_API_BASE_URL` no painel do Render.
