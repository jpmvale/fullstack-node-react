module.exports = {
  planoExercicios(req, res) {
    const response = req.body;
    let msg = "";
    let imc = response.peso / (response.altura ^ 2);
    res.json("Seu imc é " + imc);
  },
};
