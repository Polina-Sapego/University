const express = require("express");
const usersController = require("../controllers/user");
const validate = require('../middleware/validate');
const UserScheme = require('../schemes/user');
//const mongoLogger = require("../utils/MongoLogger");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();
//router.use(mongoLogger.LogHttpEvent);

router.post("/",validate(UserScheme.createUser), usersController.createUser
/*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

router.put("/:id",validate(UserScheme.updateUser),usersController.updateUser1
/*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete("/:id", usersController.deleteUser1
/*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/", usersController.listUser
/*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/:id", usersController.findUserById
/*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);




module.exports = router;
