const express = require("express");
const speciality_testController = require("../controllers/speciality_test");
const validate = require('../middleware/validate');
const speciality_testScheme = require('../schemes/speciality_test');
//const mongoLogger = require("../utils/MongoLogger");
const router = express.Router();


//router.use(mongoLogger.LogHttpEvent);

router.post("/",validate(speciality_testScheme.createSpeciality_test), speciality_testController.createSpeciality_test
/*
    #swagger.tags = ['Speciality_test']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.put("/:id",validate(speciality_testScheme.updateSpeciality_test),speciality_testController.updateSpeciality_test1
/*
    #swagger.tags = ['Speciality_test']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete("/:id", speciality_testController.deleteSpeciality_test1
/*
    #swagger.tags = ['Speciality_test']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/", speciality_testController.listSpeciality_tes/*
#swagger.tags = ['Speciality_test']
#swagger.security = [{ "bearerAuth": [] }]
*/);
router.get("/:id", speciality_testController.findSpeciality_testById
/*
    #swagger.tags = ['Speciality_test']
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
