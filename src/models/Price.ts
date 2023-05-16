import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Price extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  number: string;

  @CreateDateColumn()
  date: Date;
}
