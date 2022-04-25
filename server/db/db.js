const Sequelize = require("sequelize");

const db = new Sequelize("postgres://Troy:pass@localhost:5434/messenger");

module.exports = db;
