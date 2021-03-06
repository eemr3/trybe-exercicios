"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ./routes/books.routes.ts
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = __importDefault(require("../middlewares/books.middleware"));
const router = (0, express_1.Router)();
const bookController = new books_controller_1.default();
router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.getById);
router.post('/books', books_middleware_1.default, bookController.create);
exports.default = router;
