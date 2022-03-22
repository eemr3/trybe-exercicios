const express = require("express");
const bodyParser = require("body-parser");
const authMiddleware = require("./auth-middleware");

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === "")
    return res.status(400).json({ message: "Invalid data!" });

  next();
}

function validaPrice(req, res, next) {
  const { price } = req.body;
  if (!price || price < 0 || typeof price === "string")
    return res.status(400).json({ message: "Data ivalid!" });

  next();
}

app.get("/open", function (req, res) {
  res.send("open!");
});

app.use(authMiddleware);

app.get("/recipes", (req, res) => {
  res.status(200).json(recipes);
});

app.get("/recipes/search", (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) => r.name.includes(name) && r.price < parseInt(maxPrice)
  );
  res.status(200).json(filteredRecipes);
});

app.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: "Recipe not found!" });

  res.status(200).json(recipe);
});

app.post("/recipes", validateName, validaPrice, (req, res) => {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.use;
  recipes.push({ id, name, price, waitTime, chef: username });

  res.status(201).json({ message: "Recipe created successfully!" });
});

app.put("/recipes/:id", validateName, validaPrice, (req, res) => {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all("*", (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

const PORT = 3001;
app.listen(3001, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
