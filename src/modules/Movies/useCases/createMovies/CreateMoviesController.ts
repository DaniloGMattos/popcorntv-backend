import { AxiosResponse } from "axios";
import { Request, Response } from "express";

import { moviedb } from "../../../../services/axios";
import { CreateMovieUseCase } from "./CreateMovieUseCase";
// apenas um controller por usecase
class CreateMoviesController {
  constructor(private createMovieUseCase: CreateMovieUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, totalPages } = request.params;
    const topMoviesResponse: AxiosResponse = await moviedb.get(
      `/movie/top_rated?api_key=${process.env.THEMOVIEDB_SECRET_API_KEY}&page=${page}&total_pages=${totalPages}&laguage=en-US`
    );
    this.createMovieUseCase.execute(topMoviesResponse.data.results);

    return response.status(201).send();
  }
}
export { CreateMoviesController };
