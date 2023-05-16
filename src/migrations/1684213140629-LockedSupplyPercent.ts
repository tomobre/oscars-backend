import {MigrationInterface, QueryRunner} from "typeorm";

export class LockedSupplyPercent1684213140629 implements MigrationInterface {
    name = 'LockedSupplyPercent1684213140629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "locked_supply_percent" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_74d3f28bf06df63554f40fa7fb5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "locked_supply_percent"`);
    }

}
