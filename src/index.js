const DataBase = require("./database/sequelize");
const { connect } = require("./database/sequelize");
const loader = require("./loader/index");
const express = require("express");
const app = express();
const env = require('./env');
connect()
  .then(() => {
    console.log("Connected 1");
  })
  .catch((err) => console.log(err));


async function start(){
    app.use(loader);
    app.listen(5555, ()=>console.log("Server started at port 5555"));
}

start();

module.exports = app;