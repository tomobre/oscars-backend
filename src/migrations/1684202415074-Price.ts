import {MigrationInterface, QueryRunner} from "typeorm";

export class Price1684202415074 implements MigrationInterface {
    name = 'Price1684202415074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "price" ADD "number" integer NOT NULL`);
    }

}
