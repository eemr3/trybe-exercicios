const express = require("express");
const handler = require("../middlewares/hello");

const routes = express.Router();

routes.post("/", handler);

module.exports = routes;
