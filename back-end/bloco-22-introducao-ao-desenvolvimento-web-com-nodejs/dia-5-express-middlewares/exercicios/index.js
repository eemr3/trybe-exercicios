const express = require("express");
const pingRoutes = require("./routes/pingRoutes");
const helloRoutes = require("./routes/helloRoutes");
const greetingRoutes = require("./routes/greetingRoutes");
const simpsonsRoutes = require("./routes/simpsonsRoutes");

const app = express();

app.use(express.json());

app.use("/ping", pingRoutes);

app.use("/hello", helloRoutes);

app.use("/greeting", greetingRoutes);

app.use("/simpsons", simpsonsRoutes);

app.listen(3000, () => {
  console.log("Funcionando");
});
