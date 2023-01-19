const Sequelize = require("sequelize");
const { sequelize } = require("../database/sequelize");

const speciality_test = sequelize.define("speciality_test", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false
  },
  test_id: {
    type: Sequelize.INTEGER,
    field: "test_id",
    allowNull: false
  },
  speciality_id: {
    type: Sequelize.INTEGER,
    field: "speciality_id",
    allowNull: false
  },
  is_main: {
    type: Sequelize.BOOLEAN,
    field: "is_main",
    allowNull: false
  }
});

module.exports = speciality_test;
