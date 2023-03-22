const Sequelize = require('sequelize');
const dbName = 'practice';
const dbPass = 'camp';
const dbUser = 'msa';

// const sequelize = new Sequelize(dbName, dbPass, dbUser, {
//   host: 'localhost',
//   dialect: 'postgres',
//   logging: false,
//   pool: {
//     min: 0,
//     max: 5,
//     acquire: 30000,
//     idle: 10000
//   }
// })

// below for render 
// const sequelize = new Sequelize('practice_6ye2','msa', 'iXQ2zrMNYklERfQyDqGCFopxuahl8cRg', {
//     host: 'dpg-cgat2et269v4icvsnc20-a.oregon-postgres.render.com',
//     dialect: 'postgres',
//     post:5432,
//     dialectOptions: {
//         ssl: {
//           require: 'true'
//         }
//       }
// })

// below for neon 

const sequelize = new Sequelize('practice','laxmichand', 'ScWgHT0vifa2', {
    host: 'ep-blue-salad-568103.us-east-2.aws.neon.tech',
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

//    postgres://laxmichand:ScWgHT0vifa2@ep-blue-salad-568103.us-east-2.aws.neon.tech/practice

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//customer model call table creation  
db.Customers = require('./customer.model')(sequelize,Sequelize);
db.Orders = require('./order.model')(sequelize,Sequelize);

db.Customers.hasMany(db.Orders, {
    foreignKey: "customerEmail"
});
db.Orders.belongsTo(db.Customers);

module.exports = db;