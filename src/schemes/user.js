const Joi = require("joi");

const UserScheme = {

 
signup: Joi.object().keys({
    login: Joi.string()
    .max(50).required(),
    password: Joi.string()
    .min(4).max(20).required(),
    email: Joi.string()
    .email().max(255).required()
}),
login: Joi.object().keys({
    login: Joi.string()
    .max(50).required(),
    password: Joi.string()
    .min(4).max(20).required()
}),
    createUser: Joi.object().keys({
      login: Joi.string()
        .max(50)
        .required(),
      password: Joi.string()
        .min(4)
        .max(20)
        .required(),
      role: Joi.number()
        .integer()
        .min(0)
        .max(2)
        .required(),
    }),


    updateUser: Joi.object().keys({
      login: Joi.string()
        .max(50),
      password: Joi.string()
        .min(4)
        .max(20),
      role: Joi.number()
        .integer()
        .min(0)
        .max(2),
    })

}

module.exports = UserScheme;
