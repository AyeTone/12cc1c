const { Sequelize } = require("sequelize");

const db = new Sequelize("postgres://Troy:pass@localhost:5434/messenger");

try {
  db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
module.exports = db;
