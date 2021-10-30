import { Movie } from "../model/Movie";
import {
  ICreateMoviesDTO,
  IMoviesRepository,
} from "./implementations/IMoviesRepository";

// Singleton
class MoviesRepository implements IMoviesRepository {
  private movies: Movie[];
  private static INSTANCE: MoviesRepository;

  private constructor() {
    this.movies = [];
  }
  public static getInstance(): MoviesRepository {
    if (!MoviesRepository.INSTANCE) {
      MoviesRepository.INSTANCE = new MoviesRepository();
    }
    return MoviesRepository.INSTANCE;
  }
  create(movies: ICreateMoviesDTO): void {
    console.log(movies);
    this.movies.push(...movies);
  }
  list(): Movie[] {
    return this.movies;
  }
}
export { MoviesRepository };
