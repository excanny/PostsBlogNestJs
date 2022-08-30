// //import { MigrationInterface, QueryRunner } from "typeorm"
// import {
//     MigrationInterface,
//     QueryRunner,
//     Table,
//     TableIndex,
//     TableColumn,
//     TableForeignKey,
// } from "typeorm"

// export class BaseMigrations1661868832678 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.createTable(
//             new Table({
//                 name: "question",
//                 columns: [
//                     {
//                         name: "id",
//                         type: "int",
//                         isPrimary: true,
//                     },
//                     {
//                         name: "name",
//                         type: "varchar",
//                     },
//                 ],
//             }),
//             true,
//         )

//         await queryRunner.createIndex(
//             "question",
//             new TableIndex({
//                 name: "IDX_QUESTION_NAME",
//                 columnNames: ["name"],
//             }),
//         )
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
