import { MoviesRepository } from "../../repositories/MoviesRepository";
import { ListMoviesController } from "./ListMoviesController";
import { ListMovieUseCase } from "./ListMovieUsesCase";

export default (): ListMoviesController => {
  const moviesRepository = new MoviesRepository();
  const listMoviesUseCase = new ListMovieUseCase(moviesRepository);

  const listMoviesController = new ListMoviesController(listMoviesUseCase);

  return listMoviesController;
};
