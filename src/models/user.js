const Sequelize = require("sequelize");
const { sequelize } = require("../database/sequelize");
const bcrypt = require('bcrypt');

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    field: "password",
    allowNull: false
  },
  login: {
    type: Sequelize.STRING,
    field: "login",
    allowNull: false,
    unique: true
  },
  role: {
    type: Sequelize.STRING,
    values: ['user', 'manager', 'admin'],
    field: "role",
    defaultValue: 'user',
    allowNull: false
   
  }
});

User.prototype.isValidPassword = async function(password) {
  const match = await bcrypt.compare(password, this.password);
  return match;
}
module.exports = User;
