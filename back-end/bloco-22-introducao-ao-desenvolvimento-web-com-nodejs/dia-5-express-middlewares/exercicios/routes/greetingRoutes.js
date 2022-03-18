const express = require("express");
const greeting = require("../middlewares/greeting");

const routes = express.Router();

routes.post("/", greeting);

module.exports = routes;
