const express = require("express");
const fs = require("fs/promises");
const app = express();
const port = 3000;

app.get("/soma/:n1/:n2", (req, res) => {
  if (isNaN(req.params.n1) || isNaN(req.params.n2)) {
    return res.status(400).send("digite um numero valido");
  } else {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 + n2;
    res.send(`resultado: ${resultado}`);
  }
});

app.get("/subtracao/:n1/:n2", (req, res) => {
  if (isNaN(req.params.n1) || isNaN(req.params.n2)) {
    return res.status(400).send("digite um numero valido");
  } else {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 - n2;
    res.send(`resultado: ${resultado}`);
  }
});

app.get("/divisao/:n1/:n2", (req, res) => {
  if (isNaN(req.params.n1) || isNaN(req.params.n2)) {
    return res.status(400).send("digite um numero valido");
  } else {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 / n2;
    res.send(`resultado: ${resultado}`);
  }
});

app.get("/multiplicacao/:n1/:n2", (req, res) => {
  if (isNaN(req.params.n1) || isNaN(req.params.n2)) {
    return res.status(400).send("digite um numero valido");
  } else {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 * n2;
    res.send(`resultado: ${resultado}`);
  }
});

app.use((req, res) => {
  res.status(404).json({
    message: "pagina nao encontrada",
  });
});

app.listen(port, () => {
  console.log(`porta funcionando ${port}`);
});
