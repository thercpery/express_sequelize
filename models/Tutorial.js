const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        published: {
            type: Sequelize.BOOLEAN,
            default: true
        },
    });
    return Tutorial;
};