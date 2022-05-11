import express from 'express';
import routes from '../routes/Books.routes';

const app = express();

app.use('/', routes);
export = app;
