const Sequelize = require("sequelize");
const { sequelize }= require("../database/sequelize");

const universities = sequelize.define("universities", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    field: "name",
    unique: true
  },
  adress: {
    type: Sequelize.STRING,
    field: "adress",
  },
  manager_id: {
    type: Sequelize.INTEGER,
    field: "manager_id",
    allowNull: false,
    unique: true
  },
  coords: {
    type: Sequelize.STRING,
    field: "coords",

  }
});

module.exports = universities;
