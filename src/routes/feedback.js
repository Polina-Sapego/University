const express = require("express");
const feedbackController = require("../controllers/feedback");
const validate = require('../middleware/validate');
const feedbackScheme = require('../schemes/feedback');
//const mongoLogger = require("../utils/MongoLogger");
const router = express.Router();

//router.use(mongoLogger.LogHttpEvent);
router.post("/",validate(feedbackScheme.createfeedback), feedbackController.createFeedback
 /*
    #swagger.tags = ['feedback']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.put("/:id",validate(feedbackScheme.updatefeedback),feedbackController.updateFeedback1
 /*
    #swagger.tags = ['feedback']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete("/:id", feedbackController.deleteFeedback1
 /*
    #swagger.tags = ['feedback']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/", feedbackController.listFeedback
 /*
    #swagger.tags = ['feedback']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/:id", feedbackController.findFeedbackById
 /*
    #swagger.tags = ['feedback']
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
