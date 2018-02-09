const Sequelize = require('sequelize');
const sequelize = require('../db');

const Note = sequelize.define('note', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
});

module.exports = Note;