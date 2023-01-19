const genericRepository = require("./genericRepository");
const userInfoModel = require('../models/user_info');


module.exports = new genericRepository(userInfoModel);