const Sequelize = require("sequelize");
const { sequelize } = require("../database/sequelize");

const univercity_specialties = sequelize.define("univercity_specialties", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false
  },
  faculty_id: {
    type: Sequelize.INTEGER,
    field: "faculty_id",
    allowNull: false
  },
  speciality_id: {
    type: Sequelize.INTEGER,
    field: "speciality_id",
    allowNull: false
  }
},
);

module.exports = univercity_specialties;
