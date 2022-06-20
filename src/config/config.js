require('dotenv').config()

module.exports = {
  development: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
}