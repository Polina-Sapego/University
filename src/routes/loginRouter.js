const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const validate = require('../middleware/validate');
const userScheme = require('../schemes/user');
const passport = require('passport');
// const mongoLogger = require("../utils/MongoLogger");

// router.use(mongoLogger.LogHttpEvent);

router.post('/login', validate(userScheme.login), loginController.Login
/*
    #swagger.tags = ['Login]
    */
);
router.post('/signup', validate(userScheme.signup), loginController.Register
//  /*
//     #swagger.tags = ['Login']
//     */
);


module.exports = router;