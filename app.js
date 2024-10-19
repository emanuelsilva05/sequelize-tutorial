const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Importar as rotas
const routes = require('./routes/index'); // ajuste o caminho se necessário
app.use('/api', routes); // Prefixo para suas rotas

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});