import { Router } from "express";

import createMoviesController from "../modules/Movies/useCases/createMovies";
import listMoviesController from "../modules/Movies/useCases/listMovies";

const moviesRouter = Router();

moviesRouter.get("/", async (request, response) => {
  return listMoviesController().handle(request, response);
});
// só deve chamar o serviço e responder algo

moviesRouter.post("/top/:page/:totalPages", async (request, response) => {
  return createMoviesController().handle(request, response);
});

export default moviesRouter;
