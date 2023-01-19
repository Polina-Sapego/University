const Sequelize = require("sequelize");
const { sequelize }= require("../database/sequelize");

const User_info = sequelize.define("user_info", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: "user_id",
    unique: true
  },
  avatar: {
    type: Sequelize.STRING,
    field: "avatar",
    allowNull: true
  },
  DOB: {
    type: Sequelize.DATE,
    field: "DOB",
    allowNull: true
  },
  number: {
    type: Sequelize.STRING,
    field: "number",
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    field: "email",
    allowNull: false
  },
});

module.exports = User_info;
