import { Movie } from "../../entities/Movie";

// para tirar a dependencia do repositório (o que importa agora é se respeita a implementação)
type ICreateMoviesDTO = Array<Movie>;

interface IMoviesRepository {
  list(): Promise<Movie[]>;
  create(movies: ICreateMoviesDTO): Promise<void>;
}
export { IMoviesRepository, ICreateMoviesDTO };
