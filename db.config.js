const Sequelize = require('sequelize');
const dbName = 'practice';
const dbPass = 'camp';
const dbUser = 'msa';

const sequelize = new Sequelize(dbName, dbPass, dbUser, {
    host: 'localhost',
    dialect: 'postgres'
})
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//customer model call table creation  
db.Customers = require('./customer.model')(sequelize,Sequelize);

module.exports = db;