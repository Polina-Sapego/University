const genericRepository = require("./genericRepository");
const userModel = require('../models/user');


module.exports = new genericRepository(userModel);