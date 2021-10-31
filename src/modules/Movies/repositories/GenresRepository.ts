import { getRepository, Repository } from "typeorm";

import { Genre } from "../entities/Genre";
import {
  ICreateGenresDTO,
  IGenresRepository,
} from "./implementations/IGenresRepository";

// Singleton
class GenresRepository implements IGenresRepository {
  private repository: Repository<Genre>;
  private static INSTANCE: GenresRepository;

  constructor() {
    this.repository = getRepository(Genre);
  }

  async create(genres: ICreateGenresDTO): Promise<void> {
    const allGenres = this.repository.create(genres);
    await this.repository.save(allGenres);
  }
  async list(): Promise<Genre[]> {
    const genres = await this.repository.find();
    return genres;
  }
}
export { GenresRepository };
