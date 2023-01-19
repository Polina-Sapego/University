const express = require("express");
const testsController = require("../controllers/tests");
const validate = require('../middleware/validate');
const testsScheme = require('../schemes/tests');
//const mongoLogger = require("../utils/MongoLogger");

//router.use(mongoLogger.LogHttpEvent);

const router = express.Router();


router.post("/",validate(testsScheme.createTests), testsController.createTests
/*
    #swagger.tags = ['Tests']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.put("/:id",validate(testsScheme.updateTests),testsController.updateTests1
/*
    #swagger.tags = ['Tests']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete("/:id", testsController.deleteTests1
/*
    #swagger.tags = ['Tests']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/", testsController.listTests);
router.get("/:id", testsController.findTestsById
/*
    #swagger.tags = ['Tests']
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
