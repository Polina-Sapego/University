const express = require("express");
const facultiesController = require("../controllers/faculties");
const validate = require('../middleware/validate');
const FacultyScheme = require('../schemes/faculties');

const router = express.Router();
//const mongoLogger = require("../utils/MongoLogger");

//router.use(mongoLogger.LogHttpEvent);

router.post("/",validate(FacultyScheme.createFaculty), facultiesController.createFaculty
/*
    #swagger.tags = ['feedback']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.put("/:id",validate(FacultyScheme.updateFaculty),facultiesController.updateFaculty1
/*
    #swagger.tags = ['feedback']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete("/:id", facultiesController.deleteFaculty1
/*
    #swagger.tags = ['feedback']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/", facultiesController.listFaculty
/*
    #swagger.tags = ['feedback']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/:id", facultiesController.findFacultyById
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
