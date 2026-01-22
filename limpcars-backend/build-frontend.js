const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔨 Compilando frontend...');

const frontendPath = path.resolve(__dirname, '..', 'limpcars-frontend');
const distPath = path.join(frontendPath, 'dist');
const backendDistPath = path.resolve(__dirname, 'dist');

try {
  // Compila o frontend
  process.chdir(frontendPath);
  execSync('npm install', { stdio: 'inherit' });
  
  // Verifica se VITE_API_BASE_URL está configurada
  if (!process.env.VITE_API_BASE_URL) {
    console.error('❌ Erro: VITE_API_BASE_URL não está configurada!');
    console.error('   Configure a variável de ambiente VITE_API_BASE_URL antes de fazer o build.');
    console.error('   Exemplo: export VITE_API_BASE_URL=https://seu-backend.onrender.com/api');
    process.exit(1);
  }
  
  console.log(`✅ Usando VITE_API_BASE_URL: ${process.env.VITE_API_BASE_URL}`);
  execSync('npm run build', { stdio: 'inherit', env: { ...process.env } });

  // Copia o dist para o backend
  if (fs.existsSync(backendDistPath)) {
    fs.rmSync(backendDistPath, { recursive: true, force: true });
  }
  
  // Copia recursivamente
  fs.cpSync(distPath, backendDistPath, { recursive: true });
  
  console.log('✅ Frontend compilado e copiado para limpcars-backend/dist');
} catch (error) {
  console.error('❌ Erro ao compilar frontend:', error.message);
  process.exit(1);
}
