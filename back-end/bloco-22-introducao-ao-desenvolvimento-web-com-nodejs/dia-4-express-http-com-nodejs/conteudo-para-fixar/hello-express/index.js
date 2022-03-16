const express = require("express");
const bodyParse = require("body-parser");

const app = express();
app.use(bodyParse.json());

const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.post("/recipes", (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: "Recipe created successfully!" });
});

app.post("/drinks", (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });

  res.status(201).json({ message: "Drink created successfully!" });
});

app.get("/recipes", (req, res) => {
  recipes.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  res.status(200).json(recipes);
});

app.get("/recipes/search", (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredByRecipes = recipes.filter(
    (item) =>
      item.name.includes(name) &&
      item.price < Number(maxPrice) &&
      item.price >= Number(minPrice)
  );

  res.status(200).json(filteredByRecipes);
});

app.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const result = recipes.find((item) => item.id === Number(id));

  if (!result) return res.status(400).json({ message: "Recipe not found!" });

  res.status(200).json(result);
});

app.get("/drinks", (req, res) => {
  res.status(200).json(
    drinks.sort((a, b) => {
      if (a.name.replace("Água", "Agua") > b.name) return 1;
      if (a.name.replace("Água", "Agua") < b.name) return -1;
      return 0;
    })
  );
});

app.get("/drinks/search", (req, res) => {
  const { name } = req.query;
  const resultFilter = drinks.filter((item) => item.name.includes(name));

  res.status(200).json(resultFilter);
});

app.get("/drinks/:id", (req, res) => {
  const { id } = req.params;
  const result = drinks.find((item) => item.id === Number(id));

  if (!result) return res.status(400).json({ message: "Drink not found!" });

  res.status(200).json(result);
});

app.put("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const indexRecipe = recipes.findIndex((item) => item.id === parseInt(id));

  if (indexRecipe === -1)
    return res.status(401).json({ message: "Recipe not found!" });

  recipes[indexRecipe] = { ...recipes[indexRecipe], name, price };

  res.status(204).end();
});

app.delete("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const indexRecipe = recipes.findIndex((item) => item.id === parseInt(id));

  if (indexRecipe === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes.splice(indexRecipe, 1);

  res.status(204).end();
});

app.get("/validateToken", (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16)
    return res.status(401).json({ message: "Invalid Token!" });
  res.status(200).json({ message: "Valid Token!" });
});

app.listen(3001, () => {
  console.log(`Aplicação ouvindo a porta http://localhost:3001`);
});
