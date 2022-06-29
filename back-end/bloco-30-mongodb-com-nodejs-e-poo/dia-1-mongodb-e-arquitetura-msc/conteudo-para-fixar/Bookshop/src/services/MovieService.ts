import MovieModel from '../models/MovieModel';
import { IMovie } from '../models/schemas/MovieSchema';

class MovieService {
  constructor(private movieModel = new MovieModel()) {}

  public async getAllMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.getAllMovies();

    return movies;
  }
}

export default MovieService;
