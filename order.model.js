module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define('order', {
        product: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        active:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        customerEmail:{
            type: Sequelize.STRING,
            allowNull: false  
        }
    });
    return order;
}