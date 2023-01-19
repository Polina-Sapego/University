const Joi = require("joi");

const User_infoScheme = {
    createUser_info: Joi.object().keys({
      user_id: Joi.number()
        .integer()
        .required(),
      avatar: Joi.string()
       .min(1),
      DOB: Joi.date()
        .iso(),
      number: Joi.string()
        .min(3)
        .max(15),
      email: Joi.string()
        .email(),
    }),


    updateUser_info: Joi.object().keys({
      user_id: Joi.number()
        .integer()
        .required(),
      avatar: Joi.string()
       .min(1),
      DOB: Joi.date()
        .iso(),
      number: Joi.string()
        .min(3)
        .max(15),
      email: Joi.string()
        .email(),
    })

}

module.exports = User_infoScheme;
