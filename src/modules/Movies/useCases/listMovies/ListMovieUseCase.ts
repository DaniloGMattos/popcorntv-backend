import { Movie } from "../../model/Movie";
import { IMoviesRepository } from "../../repositories/implementations/IMoviesRepository";

class ListMoviesUseCase {
  constructor(private moviesRepository: IMoviesRepository) {}
  execute(): Movie[] {
    const movies = this.moviesRepository.list();
    return movies;
  }
}
export { ListMoviesUseCase };
