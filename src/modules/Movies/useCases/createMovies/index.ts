import { MoviesRepository } from "../../repositories/MoviesRepository";
import { CreateMoviesController } from "./CreateMoviesController";
import { CreateMovieUseCase } from "./CreateMovieUseCase";
// instanciações

export default (): CreateMoviesController => {
  const moviesRepository = new MoviesRepository();
  const createMovieUseCase = new CreateMovieUseCase(moviesRepository);
  const createMoviesController = new CreateMoviesController(createMovieUseCase);

  return createMoviesController;
};
