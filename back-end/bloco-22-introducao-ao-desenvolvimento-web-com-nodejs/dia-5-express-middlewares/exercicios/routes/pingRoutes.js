const express = require("express");
const ping = require("../middlewares/ping");

const routes = express.Router();

routes.get("/", ping);

module.exports = routes;
