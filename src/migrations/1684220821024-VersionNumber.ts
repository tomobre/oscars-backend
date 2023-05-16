import {MigrationInterface, QueryRunner} from "typeorm";

export class VersionNumber1684220821024 implements MigrationInterface {
    name = 'VersionNumber1684220821024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "version_number" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_f89806bc812976e3cf48f4e9517" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "version_number"`);
    }

}
