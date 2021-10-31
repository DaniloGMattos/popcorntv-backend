import { Genre } from "../../entities/Genre";
import { IGenresRepository } from "../../repositories/implementations/IGenresRepository";

// TODO : Validação
// só deve criar (respeitando as regras de negócio), sem depender de quem é o repositório
type IRequest = Array<Genre>;

class CreateGenreUseCase {
  constructor(private genresRepository: IGenresRepository) {}
  async execute(genres: IRequest): Promise<void> {
    await this.genresRepository.create(genres);
  }
}
export { CreateGenreUseCase };
