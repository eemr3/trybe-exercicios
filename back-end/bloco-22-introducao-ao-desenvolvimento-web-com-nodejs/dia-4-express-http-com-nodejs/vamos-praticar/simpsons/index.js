const express = require("express");
const fs = require("fs");
const simpsons = require("./data/simpsons.json");

const app = express();
app.use(express.json());

app.get("/simpsons", (req, res) => {
  return res.status(200).json(simpsons);
});

app.get("/simpsons/:id", (req, res) => {
  const { id } = req.params;
  const result = simpsons.find((item) => parseInt(item.id) === parseInt(id));
  if (!result) return res.status(404).json({ message: "simpson not found!" });

  return res.status(200).json(result);
});

app.post("/simpsons", (req, res) => {
  const { id, name } = req.body;

  const verifySimpison = simpsons.some(
    (item) => parseInt(item.id) === parseInt(id)
  );
  if (verifySimpison)
    return res.status(409).json({ message: "Id already exists" });
  simpsons.push({ id, name });
  fs.writeFileSync("./data/simpsons.json", JSON.stringify(simpsons));
  return res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicação rodando no endereço http://localhost:${PORT}`);
});
