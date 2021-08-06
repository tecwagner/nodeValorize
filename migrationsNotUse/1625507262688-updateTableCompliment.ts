import {MigrationInterface, QueryRunner} from "typeorm";

export class updateTableCompliment1625507262688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compliments" RENAME COLUMN "massage" TO "message"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compliments" RENAME COLUMN "massage" TO "message"`);
    }

}
