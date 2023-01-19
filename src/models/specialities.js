const Sequelize = require("sequelize");
const { sequelize }= require("../database/sequelize");

const specialities = sequelize.define("specialities", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    field: "name",
    allowNull: false
  },
  code:{
    type: Sequelize.INTEGER,
    field: "code",
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    field: "description",
  }

});



module.exports = specialities;
