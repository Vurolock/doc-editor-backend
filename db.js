const Sequelize = require('sequelize');
const sequelize = new Sequelize('react-notes', 'AndrewKeller', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;