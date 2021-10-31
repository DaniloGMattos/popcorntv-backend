import { Genre } from "../../entities/Genre";

// para tirar a dependencia do repositório (o que importa agora é se respeita a implementação)
type ICreateGenresDTO = Array<Genre>;

interface IGenresRepository {
  list(): Promise<Genre[]>;
  create(genres: ICreateGenresDTO): Promise<void>;
}
export { IGenresRepository, ICreateGenresDTO };
