const Joi = require("joi");

const specializationScheme = {
    createSpecialization: Joi.object().keys({
      name: Joi.string()
        .max(50)
        .required(),
      code: Joi.number()
        .integer()
        .min(0)
        .required(),
      description: Joi.string()
      .max(500),

    }),


    updateSpecialization: Joi.object().keys({
      name: Joi.string()
        .max(50)
        .required(),
      code: Joi.number()
        .integer()
        .min(0)
        .required(),
      description: Joi.string()
      .max(500),

    })

}

module.exports = specializationScheme;
