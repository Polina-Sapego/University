const Joi = require("joi");

const testsScheme = {
  createTests: Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(50)
        .required(),
      main_mark: Joi.number()
        .integer()
        .min(0)
        .max(100)
        .required(),
    }),


    updateTests: Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(50)
        .required(),
      main_mark: Joi.number()
        .integer()
        .min(0)
        .max(100)
        .required(),
    })

}

module.exports = testsScheme;
