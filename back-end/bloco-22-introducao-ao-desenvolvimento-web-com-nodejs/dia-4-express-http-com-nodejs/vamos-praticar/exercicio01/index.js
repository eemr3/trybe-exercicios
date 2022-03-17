const express = require("express");

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "Pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello ${name}` });
  return res.status(401).json({ message: `Unauthorized` });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  return res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} de idade!` });
});

app.listen(3001, () => {
  console.log(`Aplicação rodando no endereço http://localhost:3001`);
});
