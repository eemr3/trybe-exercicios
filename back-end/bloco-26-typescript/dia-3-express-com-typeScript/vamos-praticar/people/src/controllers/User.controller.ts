import { Request, Response } from 'express';
import UsersService from '../services/User.service';

export default class UsersController {
  public service = new UsersService();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this.service.getAll();

    return res.status(200).json(users);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const user = await this.service.getById(Number(id));

      return res.status(200).json(user);
    } catch (error: unknown) {
      const errorT = error instanceof Error && error.message;
      return res.status(404).json({ message: errorT });
    }
  };

  public createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, password, email } = req.body;

      const user = await this.service.createUser(name, password, email);

      return res.status(201).json(user);
    } catch (error) {
      const errorT = error instanceof Error && error.message;
      return res.status(409).json({ message: errorT });
    }
  };
}
