import { Router } from 'express';
import UsersController from '../controllers/User.controller';
import ValidationUser from '../middlewares/validationUser';

const routes = Router();

const validate = new ValidationUser();
const userController = new UsersController();

routes.get('/users', userController.getAll);
routes.get('/users/:id', userController.getById);
routes.post('/users', validate.validate, userController.createUser);

export default routes;
