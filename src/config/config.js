import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DB_DEVELOPMENT_URL,
    dialect: 'postgres',
    port: 3000,
  },
  test: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DB_TESTING_URL,
    dialect: 'postgres',
    port: process.env.PORT,
  },
  production: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DB_PRODUCTION_URL,
    dialect: 'postgres',
    port: process.env.PORT,
  },
};
