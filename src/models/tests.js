const Sequelize = require("sequelize");
const { sequelize } = require("../database/sequelize");

const tests = sequelize.define("tests", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    field: "name",
    allowNull: false,
  },
  min_mark: {
    type: Sequelize.INTEGER,
    field: "min_mark",
    allowNull: false,
  },
});

module.exports = tests;