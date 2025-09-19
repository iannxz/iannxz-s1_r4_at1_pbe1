// Configuração do sistema
const express = require("express");
const fs = require("fs/promises");
const app = express();
const PORT = 2600;

app.get("/calculadora", (req, res) => {
  const { operacao, n1, n2 } = req.query;

  if (!operacao || !n1 || !n2) {
    return res.status(400).json({ error: "parametros insuficientes" });
  }

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: "n1 e n2 devem ser números" });
  }

  let resultado;
  switch (operacao) {
    case "soma":
      resultado = Number(n1) + Number(n2);
      break;
    case "subtracao":
      resultado = Number(n1) - Number(n2);
      break;
    case "multiplicacao":
      resultado = Number(n1) * Number(n2);
      break;
    case "divisao":
      resultado = Number(n1) / Number(n2);
      break;
  }
  
  res.json({ resultado });
});

app.use((req, res) => {
  res.status(404).json({ message: "pagina nao encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});
