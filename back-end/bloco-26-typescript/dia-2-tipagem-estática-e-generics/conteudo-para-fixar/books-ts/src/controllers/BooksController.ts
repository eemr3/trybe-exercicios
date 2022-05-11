import { Request, Response } from 'express';
import main from '../services/BooksService';

export const getAll = async (req: Request, res: Response) => {
  const books = await main();

  return res.status(200).json(books);
};
