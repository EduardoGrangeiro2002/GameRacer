import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  points: number;

  @CreateDateColumn()
  created_at: Date;

  constructor(points = 0) {
    this.points = points;
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
