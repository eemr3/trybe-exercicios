import express from 'express';
import { getAll } from '../controllers/BooksController';

const routes = express.Router();

routes.get('/', getAll);

export = routes;
