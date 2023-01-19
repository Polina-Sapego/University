const Joi = require("joi");

const speciality_testScheme = {
  createSpeciality_test: Joi.object().keys({
      test_id: Joi.number()
        .integer()
        .min(0)
        .required(),
      speciality_id: Joi.number()
        .integer()
        .min(0)
        .required(),
      is_main: Joi.boolean()
        .required(),
    }),


    updateSpeciality_test: Joi.object().keys({
      test_id: Joi.number()
        .integer()
        .min(0)
        .required(),
      speciality_id: Joi.number()
        .integer()
        .min(0)
        .required(),
      is_main: Joi.boolean()
        .required(),
    })

}

module.exports = UserScheme;
