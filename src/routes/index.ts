import { Router } from "express";

import genresRouter from "./genres.routes";
import moviesRouter from "./movies.routes";

const routes = Router();

routes.use("/movies", moviesRouter);
routes.use("/genres", genresRouter);

export default routes;
