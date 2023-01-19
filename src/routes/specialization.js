const express = require("express");
const specializationController = require("../controllers/specialization");
const validate = require('../middleware/validate');
const specializationScheme = require('../schemes/specialization');
//const mongoLogger = require("../utils/MongoLogger");
const isAdmin = require("../middleware/isAdmin");
const router = express.Router();

//router.use(mongoLogger.LogHttpEvent);

router.post("/",validate(specializationScheme.createSpecialization), specializationController.createSpecialization
/*
    #swagger.tags = ['Speciality']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.put("/:id",validate(specializationScheme.updateSpecialization),specializationController.updateSpecialization1
/*
    #swagger.tags = ['Speciality']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete("/:id", specializationController.deleteSpecialization1
/*
    #swagger.tags = ['Speciality']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/", specializationController.listSpecialization
/*
    #swagger.tags = ['Speciality']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get("/:id", specializationController.findSpecializationById
/*
    #swagger.tags = ['Speciality']
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
