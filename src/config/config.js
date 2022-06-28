import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: "postgres://postgres:12345@localhost:8000/phantom_db",
    dialect: 'postgres',
    // port: process.env.PORT,
    port: process.env.DB_PORT,
  },
  test: {
    JWT_SECRET:"nmmskl77.;y6",
    url: "postgres://umcbxkwsqfxjsc:20ed564df25476051de8a4e4fd668a56151985de6009571a9f514841fbe45a4b@ec2-52-72-99-110.compute-1.amazonaws.com:5432/d70c5rp7hagi9n",
    dialect: 'postgres',
    port: 3000,
  },
  production: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DB_PRODUCTION_URL,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  },
};
