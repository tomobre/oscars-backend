import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Country } from "./Country";
import { ASN } from "./ASN";

@Entity()
export class IP extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  ip: string;

  @Column({ nullable: false })
  SNcount: number;

  @ManyToOne(() => ASN, (asn) => asn.ips)
  ASN: ASN;

  @Column({ nullable: true })
  lattitude: string;

  @Column({ nullable: true })
  longitude: string;

  @ManyToOne(() => Country, (country) => country.ips)
  country: Country;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  accuracyRadius: number;
}
