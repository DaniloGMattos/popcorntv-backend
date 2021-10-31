import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("genres")
class Genre {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
}
export { Genre };
