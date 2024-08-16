import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const moduleConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: `${process.env.PG_HOST}`,
  port: +process.env.PG_PORT,
  username: `${process.env.PG_USERNAME}`,
  password: `${process.env.PG_PASSWORD}`,
  database: process.env.PG_DATABASE,
  pool: {
    min: +(process.env.PG_POOL_MIN || 0),
    max: +(process.env.PG_POOL_MAX || 10),
  },
  ssl: true,
  autoLoadModels: true,
  synchronize: false,
};
