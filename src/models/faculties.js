const Sequelize = require("sequelize");
const { sequelize } = require("../database/sequelize");

const faculties = sequelize.define("faculties", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: "id",
  },
  name: {
    type: Sequelize.STRING,
    field: "name",
    allowNull: false
  },
  universities_id: {
    type: Sequelize.INTEGER,
    field: "universities_id",
    allowNull: false
  }
});

module.exports = faculties;