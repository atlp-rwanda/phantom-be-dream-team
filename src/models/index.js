import {readdirSync} from 'fs';
import {basename as _basename, join} from 'path';
import Sequelize, {DataTypes} from 'sequelize';
import prop from '../config/config';

const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'test';
const config = prop[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, {
    dialect: 'postgres',
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    //  },
  });
} else {
  sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config,
  );
}

readdirSync(__dirname)
    .filter(
        (file) =>
          // eslint-disable-next-line max-len
          file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
    )
    .forEach((file) => {
      const model = require(join(__dirname, file))(sequelize, DataTypes);
      db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
sequelize
    .authenticate()
    .then(() => {
      console.log('Connected! Database Status : ON 🔥.');
    })
    .catch((err) => {
      console.error('Failed to connect! Database Status : OFF:', err);
    });

sequelize
.authenticate()  
.then(() => {    console.log('DB connected') })  
.catch((err) => {    console.error('Failed to connect!', err);  });

export default db;