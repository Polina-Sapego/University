const Sequelize = require("sequelize");
const { sequelize }= require("../database/sequelize");

const feedback = sequelize.define("feedback", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false
  },
  university_id: {
    type: Sequelize.INTEGER,
    field: "university_id",
    allowNull: false
  },
  feedback: {
    type: Sequelize.STRING,
    field: "feedback",
  },
  user_id: {
    type: Sequelize.INTEGER,
    field: "user_id",
    allowNull: false
  },
  rate: {
    type: Sequelize.INTEGER,
    field: "rate",
    allowNull: false
  },
  Date: {
    type: Sequelize.DATE,
    field: "Date",
    allowNull: false
  },
});

module.exports = feedback;
