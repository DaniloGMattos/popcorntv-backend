import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateMoviesGenres1635697479487 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "moviesgenres",
        columns: [
          {
            name: "movie_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "genre_id",
            type: "int",
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: "FKGenreMovie",
            referencedTableName: "genres",
            columnNames: ["genre_id"],
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          }),
          new TableForeignKey({
            name: "FKMovieGenre",
            referencedTableName: "movies",
            columnNames: ["movie_id"],
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE moviesgenres");
  }
}
