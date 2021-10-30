import { MoviesRepository } from "../../repositories/MoviesRepository";
import { ListMoviesController } from "./ListMoviesController";
import { ListMoviesUseCase } from "./ListMovieUseCase";

const moviesRepository = MoviesRepository.getInstance();
const listMoviesUseCase = new ListMoviesUseCase(moviesRepository);

const listMoviesController = new ListMoviesController(listMoviesUseCase);

export { listMoviesController };
