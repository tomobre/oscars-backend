import {MigrationInterface, QueryRunner} from "typeorm";

export class CirculatingSupply1684210196737 implements MigrationInterface {
    name = 'CirculatingSupply1684210196737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "circulating_supply" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1adf4d78b7ee9ef3a2e346d7022" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "circulating_supply"`);
    }

}
