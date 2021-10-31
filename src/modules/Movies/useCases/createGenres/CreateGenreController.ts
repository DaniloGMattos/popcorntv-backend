import { AxiosResponse } from "axios";
import { Request, Response } from "express";

import { moviedb } from "../../../../services/axios";
import { CreateGenreUseCase } from "./CreateGenreUseCase";
// apenas um controller por usecase
class CreateGenresController {
  constructor(private createGenreUseCase: CreateGenreUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const genresResponse: AxiosResponse = await moviedb.get(
      `genre/movie/list?api_key=${process.env.THEMOVIEDB_SECRET_API_KEY}`
    );
    this.createGenreUseCase.execute(genresResponse.data.genres);

    return response.status(201).send();
  }
}
export { CreateGenresController };
