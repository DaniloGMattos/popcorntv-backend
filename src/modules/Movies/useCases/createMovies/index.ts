import { MoviesRepository } from "../../repositories/MoviesRepository";
import { CreateMoviesController } from "./CreateMoviesController";
import { CreateMovieUseCase } from "./CreateMovieuUseCase";
// instanciações
const moviesRepository = MoviesRepository.getInstance();
const createMovieUseCase = new CreateMovieUseCase(moviesRepository);
const createMoviesController = new CreateMoviesController(createMovieUseCase);

export { createMoviesController };
