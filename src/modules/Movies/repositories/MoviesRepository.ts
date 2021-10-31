import { getRepository, Repository } from "typeorm";

import { Movie } from "../entities/Movie";
import {
  ICreateMoviesDTO,
  IMoviesRepository,
} from "./implementations/IMoviesRepository";

class MoviesRepository implements IMoviesRepository {
  private repository: Repository<Movie>;
  private static INSTANCE: MoviesRepository;

  constructor() {
    this.repository = getRepository(Movie);
  }

  async create(movies: ICreateMoviesDTO): Promise<void> {
    const topMovies = this.repository.create(movies);
    await this.repository.save(topMovies);
  }
  async list(): Promise<Movie[]> {
    const movies = await this.repository.find();
    return movies;
  }
}
export { MoviesRepository };
