const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const loginRouter=require("../routes/loginRouter")
const userRouter=require("../routes/user")
const user_infoRouter=require("../routes/user_info")
const universitiesRouter=require("../routes/catalog")
const facultiesRouter=require("../routes/faculties")
const specializationRouter=require("../routes/specialization")
const feedbackRouter=require("../routes/feedback")
const routes = require('../routes/');
const passportRoutes = require('./passport');
const Express = require("./express");
const Swagger = require('./Swagger');
const swaggerUI = require('swagger-ui-express');
const isAuthorized = require("../middleware/isAuthorized");
const isAdmin = require("../middleware/isAdmin");
router.use('/api-docs', swaggerUI.serve, Swagger)
router.use(passportRoutes);
router.use(Express);

router.use(routes);

router.use(bodyparser.json());
router.use("/login",loginRouter);
router.use("/signup",loginRouter);
router.use(isAuthorized);
router.use("/user_info",user_infoRouter);
router.use("/catalog",universitiesRouter);//
router.use("/faculty",facultiesRouter);
router.use("/specialty",specializationRouter);
router.use("/feedback",feedbackRouter);
//router.use(isAdmin);
router.use("/user",userRouter);


module.exports = router;
