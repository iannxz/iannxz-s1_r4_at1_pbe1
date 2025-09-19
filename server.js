// Configuração do sistema
const express = require("express");
const fs = require("fs/promises");
const app = express();
const PORT = 2600;

app.use(express.json());

app.get("/saudacao/:nome", (req, res) => {
  try {
    const { nome } = req.params;
    const { hora } = req.query;

    // converte pra num inteiro
    const horaNum = parseInt(hora);

    // erro se nao for um numero
    if (isNaN(horaNum)) {
      throw new Error("hora invalida tente um numero");
    }

    let saudacao;
    if (horaNum >= 0 && horaNum < 6) {
      saudacao = `boa madrugada, ${nome}!`;
    } else if (horaNum >= 6 && horaNum < 12) {
      saudacao = `mom dia, ${nome}!`;
    } else if (horaNum >= 12 && horaNum < 18) {
      saudacao = `boa tarde, ${nome}!`;
    } else if (horaNum >= 18 && horaNum <= 23) {
      saudacao = `boa noite, ${nome}!`;
    } else {
  
      throw new Error("valor inválido!! tente de 0 a23");
    }

    // sucesso
    res.status(200).json({ message: saudacao });
  } catch (error) {
    // erro
    res.status(400).json({ message: error.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});
 
app.listen(PORT, () => {
  console.log(`Servidor Ativo na porta ${PORT}`);
});
 