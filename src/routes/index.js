const express = require('express');

const loginRouter = require('./loginRouter');

const router = express.Router();


//router.use(logger.httpLog);
router.use('/', loginRouter);


module.exports = router;