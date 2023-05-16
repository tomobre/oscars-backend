import {MigrationInterface, QueryRunner} from "typeorm";

export class BlockchainSize1684211301308 implements MigrationInterface {
    name = 'BlockchainSize1684211301308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blockchain_size" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_053330b0e9be268f97330a90e3a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blockchain_size"`);
    }

}
