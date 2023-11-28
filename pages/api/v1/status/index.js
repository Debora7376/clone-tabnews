function status(require, response) {
  response.status(200).json({ chave: "Vida, eu te amo!!!" });
}

export default status;
