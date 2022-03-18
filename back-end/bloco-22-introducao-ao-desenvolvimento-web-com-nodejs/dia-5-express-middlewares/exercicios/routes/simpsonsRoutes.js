const express = require("express");
const createSimpson = require("../middlewares/createSimpson");
const getSimpsons = require("../middlewares/getSimpsons");
const getSimpsonById = require("../middlewares/getSimpsonById");
const validateIdSimpson = require("../middlewares/validateIdSimpson");
const validateNameSimpson = require("../middlewares/validateNameSimpson");

const routes = express.Router();

routes.get("/", getSimpsons);

routes.get("/:id", getSimpsonById);

routes.post("/", validateIdSimpson, validateNameSimpson, createSimpson);

module.exports = routes;
