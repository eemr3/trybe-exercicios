import express, { Request, Response } from 'express';
import UsersRoute from './routes/Users.routes';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response): Response => res.send('Tudo OK'));

app.use(UsersRoute);

export default app;
