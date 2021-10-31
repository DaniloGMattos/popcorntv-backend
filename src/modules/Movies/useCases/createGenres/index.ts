import { GenresRepository } from "../../repositories/GenresRepository";
import { CreateGenresController } from "./CreateGenreController";
import { CreateGenreUseCase } from "./CreateGenreUseCase";
// instanciações
export default (): CreateGenresController => {
  const genresRepository = new GenresRepository();
  const createGenreUseCase = new CreateGenreUseCase(genresRepository);
  const createGenresController = new CreateGenresController(createGenreUseCase);

  return createGenresController;
};
