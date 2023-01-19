const Joi = require("joi");

const UserScheme = {
    createUser: Joi.object().keys({
      university_id: Joi.number()
      .integer()
        .min(0)
        .required(),
      feedback: Joi.string()
        .required(),
      user_id: Joi.number()
        .integer()
        .min(0)
        .required(),
      rate: Joi.number()
        .min(0)
        .max(5)
        .required(),
      date: Joi.date()
      .iso()
      .required(),
    }),


    updateUser: Joi.object().keys({
      university_id: Joi.number()
      .integer()
        .min(0)
        .required(),
      feedback: Joi.string()
        .required(),
      user_id: Joi.number()
        .integer()
        .min(0)
        .required(),
      rate: Joi.number()
        .min(0)
        .max(5)
        .required(),
      date: Joi.date()
      .iso()
      .required(),
    })

}

module.exports = UserScheme;
