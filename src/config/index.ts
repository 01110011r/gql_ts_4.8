import { Sequelize } from "sequelize";
import "dotenv/config";

const passwd : string | undefined=process.env.DB_PASSWORD


export const newSequelize=new Sequelize(`postgres://postgres:${passwd}@localhost:5432/testdb`, {
    logging: false
});