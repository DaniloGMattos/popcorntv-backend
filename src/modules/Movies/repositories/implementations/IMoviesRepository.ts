import { Movie } from "../../model/Movie";

// para tirar a dependencia do repositório (o que importa agora é se respeita a implementação)
type ICreateMoviesDTO = Array<Movie>;

interface IMoviesRepository {
  list(): Movie[];
  create(movies: ICreateMoviesDTO): void;
}
export { IMoviesRepository, ICreateMoviesDTO };
