import {MigrationInterface, QueryRunner} from "typeorm";

export class SNCount1684212041900 implements MigrationInterface {
    name = 'SNCount1684212041900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sn_count" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4275f92f90c0ab03b8b39d3c94f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sn_count"`);
    }

}
