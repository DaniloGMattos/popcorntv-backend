import axios from "axios";

export const moviedb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
