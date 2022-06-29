import { Request, Response } from 'express';
import MovieService from '../services/MovieService';

class MovieController {
  internalError = 'Internal server error';
  constructor(private movieService = new MovieService()) {}

  public getAllMovies = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const movies = await this.movieService.getAllMovies();

      return res.status(200).send(movies);
    } catch (error: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };
}

export default MovieController;
