const Joi = require("joi");

const feedbackScheme = {
    createfeedback: Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(50)
        .required(),
      university_id: Joi.number()
        .integer()
        .required(),

    }),


    updatefeedback: Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(50)
        .required(),
      university_id: Joi.number()
        .integer()
        .required(),

    })

}

module.exports = feedbackScheme;
