import { Request, Response } from "express";

import { ListMoviesUseCase } from "./ListMovieUseCase";

class ListMoviesController {
  constructor(private listMoviesUseCase: ListMoviesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const allMovies = this.listMoviesUseCase.execute();
    return response.status(200).json(allMovies);
  }
}
export { ListMoviesController };
