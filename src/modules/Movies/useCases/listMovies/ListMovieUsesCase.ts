import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../../repositories/implementations/IMoviesRepository";

class ListMovieUseCase {
  constructor(private moviesRepository: IMoviesRepository) {}
  async execute(): Promise<Movie[]> {
    const movies = await this.moviesRepository.list();
    return movies;
  }
}
export { ListMovieUseCase };
