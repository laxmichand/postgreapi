const Sequelize = require('sequelize');
const dbName = 'practice';
const dbPass = 'camp';
const dbUser = 'msa';

// const sequelize = new Sequelize(dbName, dbPass, dbUser, {
//     host: 'localhost',
//     dialect: 'postgres'
// })
// below for render 
const sequelize = new Sequelize('practice_6ye2','msa', 'iXQ2zrMNYklERfQyDqGCFopxuahl8cRg', {
    host: 'dpg-cgat2et269v4icvsnc20-a.oregon-postgres.render.com',
    dialect: 'postgres',
    post:5432,
    dialectOptions: {
        ssl: {
          require: 'true'
        }
      }
})

// postgres://msa:iXQ2zrMNYklERfQyDqGCFopxuahl8cRg@dpg-cgat2et269v4icvsnc20-a.oregon-postgres.render.com/practice_6ye2
   //postgres://msa:iXQ2zrMNYklERfQyDqGCFopxuahl8cRg@dpg-cgat2et269v4icvsnc20-a.oregon-postgres.render.com/practice_6ye2

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//customer model call table creation  
db.Customers = require('./customer.model')(sequelize,Sequelize);

module.exports = db;