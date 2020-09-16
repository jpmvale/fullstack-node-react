const { response } = require("express");
const express = require("express");
const routes = express.Router();
const musculacaoController = require("./controllers/musculacao");

routes.get("/", (req, res) => {
  res.send("welcome to the server");
});

routes.get("/cursos", (req, res) => {
  res.json({
    Web: "React.js",
    Mobile: "React-Native",
    ML: "Python",
  });
});

routes.post("/cursos", (req, res) => {
  const response = req.body;
  res.json(response);
});

routes.post("/alunos", (req, res) => {
  const response = req.body;
  res.status(200).send();
  console.log(response);
});

routes.post("/prog/:nome", (req, res) => {
  const response = req.params.nome;
  res.send(response);
});

routes.post("/diretoria", (req, res) => {
  const name = req.query.nome;
  const age = req.query.idade;
  res.send(name + " " + age);
});

routes.post("/matricula", musculacaoController.planoExercicios);

module.exports = routes;
