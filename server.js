const express = require("express");
const fs = require("fs/promises");
const app = express();
const PORT = 3022;

// funcao para verificar se o ano informado é bissexto
function verificarBissexto(ano) {
  if (ano % 400 === 0) {
    return "o ano e bissexto";
  }
  if (ano % 4 === 0 && ano % 100 !== 0) {
    return "o ano e bissexto";
  }
  return "o ano nao e bissexto";
}



app.get('/ano/:valor', async (req, res) => {
    try {
        const { valor } = req.params;
        const resposta = verificarBissexto(Number(valor));
       res.send(resposta);
    } catch (error) {
        res.status(500).json({ erro: "falha na requisiçao" });
    }
});

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});