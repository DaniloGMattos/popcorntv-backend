import { Request, Response } from "express";

import { ListMovieUseCase } from "./ListMovieUsesCase";

class ListMoviesController {
  constructor(private listMoviesUseCase: ListMovieUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const allMovies = await this.listMoviesUseCase.execute();
    return response.status(200).json(allMovies);
  }
}
export { ListMoviesController };
