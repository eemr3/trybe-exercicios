const express = require("express");
const genereteToken = require("./generate_token");

const app = express();
app.use(express.json());

app.get("/signup", (req, res) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 23)
    return res.status(401).json({ message: "Token inválido!" });

  return res.status(200).json({ message: "Token válido!" });
});

app.post("/signup", (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone)
    return res.status(401).json({ message: "missing fields!" });

  const token = genereteToken();

  return res.status(200).json({ token: `${token}` });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Aplicação rodando na URL: http://localhost:${PORT}`);
});
