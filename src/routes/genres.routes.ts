import { Router } from "express";

import createGenresController from "../modules/Movies/useCases/createGenres";
import listGenresController from "../modules/Movies/useCases/listGenres";

const genresRouter = Router();

genresRouter.get("/", async (request, response) => {
  return listGenresController().handle(request, response);
});

genresRouter.post("/", async (request, response) => {
  return createGenresController().handle(request, response);
});

export default genresRouter;
