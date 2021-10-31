import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../../repositories/implementations/IMoviesRepository";

// TODO : Validação
// só deve criar (respeitando as regras de negócio), sem depender de quem é o repositório
type IRequest = Array<Movie>;

class CreateMovieUseCase {
  constructor(private moviesRepository: IMoviesRepository) {}
  async execute(movies: IRequest): Promise<void> {
    await this.moviesRepository.create(movies);
  }
}
export { CreateMovieUseCase };
