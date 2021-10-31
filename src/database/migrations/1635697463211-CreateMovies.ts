import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMovies1635697463211 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "movies",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "poster_path",
            type: "varchar",
          },
          {
            name: "adult",
            type: "boolean",
          },
          {
            name: "overview",
            type: "text",
          },
          {
            name: "release_date",
            type: "datetime",
          },

          {
            name: "original_title",
            type: "varchar",
          },
          {
            name: "original_language",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },

          {
            name: "backdrop_path",
            type: "varchar",
          },
          {
            name: "popularity",
            type: "numeric",
          },

          {
            name: "vote_count",
            type: "int",
          },
          {
            name: "video",
            type: "boolean",
          },
          {
            name: "vote_average",
            type: "numeric",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE movies");
  }
}
