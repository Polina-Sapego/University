const express = require("express");
const users_infoController = require("../controllers/user_info");
const validate = require('../middleware/validate');
const User_infoScheme = require('../schemes/user_info');
//const mongoLogger = require("../utils/MongoLogger");
 const router = express.Router();

//router.use(mongoLogger.LogHttpEvent);

router.post("/",validate(User_infoScheme.createUser_info),users_infoController.createUser_info
/*
    #swagger.tags = ['Users_info']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.put("/:id",validate(User_infoScheme.updateUser_info),users_infoController.updateUser1_info
/*
    #swagger.tags = ['Users_info']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete("/:id", users_infoController.deleteUser1_info
/*
    #swagger.tags = ['Users_info']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/", users_infoController.listUser_info
/*
    #swagger.tags = ['Users_info']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/:id", users_infoController.findUser_infoById
/*
    #swagger.tags = ['Users_info']
    #swagger.security = [{ "bearerAuth": [] }]
    */);


/*
router.get("/user/", usersController.createUser);
router.put("/user/:id",usersController);
router.get("/search", usersController.search);
router.delete("/:id", usersController.delete);
router.post("/:id/role", usersController.setRole);
*/
module.exports = router;
