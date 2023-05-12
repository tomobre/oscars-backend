import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Client } from "./Client";
import { Coach } from "./Coach";

@Entity()
export class Reviews extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  review: number;

  @Column({ type: "text", nullable: true })
  comment: string;

  @Column({ type: "text", nullable: true })
  name: string;

  @Column({ type: "text", nullable: true })
  picture: string;

  @ManyToOne(() => Client, (client) => client.createdReviews)
  client: Client;

  @ManyToOne(() => Coach, (coach) => coach.receivedReviews)
  coach: Coach;
}
