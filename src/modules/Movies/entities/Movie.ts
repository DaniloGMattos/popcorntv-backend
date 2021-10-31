import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

import { Genre } from "./Genre";

@Entity("movies")
class Movie {
  @PrimaryColumn()
  id: number;
  @Column()
  poster_path: string;
  @Column()
  adult: boolean;
  @Column()
  overview: string;
  @Column()
  release_date: Date;
  @ManyToMany(() => Genre)
  @JoinTable({
    name: "moviesgenres",
    joinColumns: [{ name: "movie_id" }],
    inverseJoinColumns: [{ name: "genre_id" }],
  })
  genres: Genre[];
  @Column()
  original_title: string;
  @Column()
  original_language: string;
  @Column()
  title: string;
  @Column()
  backdrop_path: string;
  @Column()
  popularity: number;
  @Column()
  vote_count: number;
  @Column()
  video: boolean;
  @Column()
  vote_average: number;
}
export { Movie };
