import database from "infra/database.js";

async function status(require, response) {
  const result = await database.query("select 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "Vida, eu te amo!!!" });
}

export default status;
