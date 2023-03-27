require('dotenv').config();

module.exports = {
  username: process.env.DB_USERNAME || 'someuser',
  password: process.env.DB_PASSWORD || 'Password1!',
  database: process.env.DB_NAME || 'somedatabase',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3307',
  dialect: process.env.DB_DIALECT || 'mysql',
  seederStorage: 'sequelize',
  operatorsAliases: 0,
  logging: console.log
};
