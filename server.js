const express = require("express");
const app = express();
const PORT = 2601;
 
app.get("/operacao/:tipo", (req, res) => {
  const { tipo } = req.params;
  const { n1, n2 } = req.query;
 
 
  let resultado;
 
  switch (tipo) {
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
 
 
  res.send(`resultado da ${tipo} é ${resultado}`);
});
 
app.use((req, res) => {
  res.status(404).json({ message: "pagina nao encontrada" });
});
 
app.listen(PORT, () => {
  console.log(`Servidor Ativo na porta ${PORT}`);
});