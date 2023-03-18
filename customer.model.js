module.exports = (sequelize, Sequelize) => {
    const customer = sequelize.define('customer', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            primaryKey:true,
            allowNull: false,
        },
        active:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });
    return customer;
}