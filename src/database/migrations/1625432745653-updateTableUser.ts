import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class updateTableUser1625432745653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "update_at" TO "updated_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "update_at" TO "updated_at"`);
    }

}
