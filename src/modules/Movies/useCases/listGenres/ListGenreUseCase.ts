import { Genre } from "../../entities/Genre";
import { IGenresRepository } from "../../repositories/implementations/IGenresRepository";

class ListGenreUseCase {
  constructor(private genresRepository: IGenresRepository) {}
  async execute(): Promise<Genre[]> {
    const genres = await this.genresRepository.list();
    return genres;
  }
}
export { ListGenreUseCase };
