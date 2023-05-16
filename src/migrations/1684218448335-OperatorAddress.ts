import {MigrationInterface, QueryRunner} from "typeorm";

export class OperatorAddress1684218448335 implements MigrationInterface {
    name = 'OperatorAddress1684218448335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operator_address" DROP COLUMN "count"`);
        await queryRunner.query(`ALTER TABLE "operator_address" ADD "count" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operator_address" DROP COLUMN "count"`);
        await queryRunner.query(`ALTER TABLE "operator_address" ADD "count" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
