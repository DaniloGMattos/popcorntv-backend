import { Request, Response } from "express";

import { ListGenreUseCase } from "./ListGenreUseCase";

class ListGenresController {
  constructor(private listGenresUseCase: ListGenreUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const allGenres = await this.listGenresUseCase.execute();
    return response.status(200).json(allGenres);
  }
}
export { ListGenresController };
