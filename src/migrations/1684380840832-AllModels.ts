import {MigrationInterface, QueryRunner} from "typeorm";

export class AllModels1684380840832 implements MigrationInterface {
    name = 'AllModels1684380840832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blockchain_size" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_053330b0e9be268f97330a90e3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "locked_supply_percent" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_74d3f28bf06df63554f40fa7fb5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "country" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "asn" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_757d0b06a9a5faa3d0a2135710d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ip" ("id" SERIAL NOT NULL, "ip" character varying NOT NULL, "SNcount" integer NOT NULL, "lattitude" character varying, "longitude" character varying, "city" character varying, "accuracyRadius" integer, "aSNId" integer, "countryId" integer, CONSTRAINT "PK_b12fba291251bda71560e34b209" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "operator_address" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_d6046e582da6673bb9e10a374de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "price" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "circulating_supply" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1adf4d78b7ee9ef3a2e346d7022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "version_number" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_f89806bc812976e3cf48f4e9517" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sn_count" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4275f92f90c0ab03b8b39d3c94f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ip" ADD CONSTRAINT "FK_3e861fc3d9f8dfa7e0be1189f7c" FOREIGN KEY ("aSNId") REFERENCES "asn"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ip" ADD CONSTRAINT "FK_e195803e18fc1af085b33d66f34" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ip" DROP CONSTRAINT "FK_e195803e18fc1af085b33d66f34"`);
        await queryRunner.query(`ALTER TABLE "ip" DROP CONSTRAINT "FK_3e861fc3d9f8dfa7e0be1189f7c"`);
        await queryRunner.query(`DROP TABLE "sn_count"`);
        await queryRunner.query(`DROP TABLE "version_number"`);
        await queryRunner.query(`DROP TABLE "circulating_supply"`);
        await queryRunner.query(`DROP TABLE "price"`);
        await queryRunner.query(`DROP TABLE "operator_address"`);
        await queryRunner.query(`DROP TABLE "ip"`);
        await queryRunner.query(`DROP TABLE "asn"`);
        await queryRunner.query(`DROP TABLE "country"`);
        await queryRunner.query(`DROP TABLE "locked_supply_percent"`);
        await queryRunner.query(`DROP TABLE "blockchain_size"`);
    }

}
