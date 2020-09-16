const express = require("express");
const server = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const musculacaoController = require("./src/controllers/musculacao");

//allow json response
server.use(express.json());

server.use(require("./src/routes"));

server.listen(port);
console.log("listening on port " + port);
