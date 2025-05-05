
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity({ name: "tasks" })
@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 0 })
  completed: number;

  @Column()
  createdat: string;
}
