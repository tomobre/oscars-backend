import {MigrationInterface, QueryRunner} from "typeorm";

export class OperatorAddress1684218342951 implements MigrationInterface {
    name = 'OperatorAddress1684218342951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "operator_address" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "count" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d6046e582da6673bb9e10a374de" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "operator_address"`);
    }

}
