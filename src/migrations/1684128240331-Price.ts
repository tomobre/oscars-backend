import {MigrationInterface, QueryRunner} from "typeorm";

export class Price1684128240331 implements MigrationInterface {
    name = 'Price1684128240331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "price" ("id" SERIAL NOT NULL, "number" integer NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "price"`);
    }

}
