const express = require("express");
const universitiController = require("../controllers/catalog");
const validate = require('../middleware/validate');
const universitiScheme = require('../schemes/catalog');
//const mongoLogger = require("../utils/MongoLogger");
const router = express.Router();

//router.use(mongoLogger.LogHttpEvent);
router.post("/",validate(universitiScheme.createUniversitiScheme), universitiController.createUniversity
/*
    #swagger.tags = ['catalog']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.put("/:id",validate(universitiScheme.updateUniversitiScheme),universitiController.updateUniversity1
/*
    #swagger.tags = ['catalog']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete("/:id", universitiController.deleteUniversity1
/*
    #swagger.tags = ['catalog']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/", universitiController.listUniversity
/*
    #swagger.tags = ['catalog']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/:id", universitiController.findUniversityById
/*
    #swagger.tags = ['catalog']
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
