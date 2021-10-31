import { GenresRepository } from "../../repositories/GenresRepository";
import { ListGenresController } from "./ListGenresController";
import { ListGenreUseCase } from "./ListGenreUseCase";

export default (): ListGenresController => {
  const genresRepository = new GenresRepository();
  const listGenreUseCase = new ListGenreUseCase(genresRepository);

  const listGenresController = new ListGenresController(listGenreUseCase);

  return listGenresController;
};
