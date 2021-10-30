import { Movie } from "../../model/Movie";
import { IMoviesRepository } from "../../repositories/implementations/IMoviesRepository";

// TODO : Validação
// só deve criar (respeitando as regras de negócio), sem depender de quem é o repositório
type IRequest = Array<Movie>;

class CreateMovieUseCase {
  constructor(private moviesRepository: IMoviesRepository) {}
  execute(movies: IRequest): void {
    this.moviesRepository.create(movies);
  }
}
export { CreateMovieUseCase };
