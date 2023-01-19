const Joi = require("joi");

const universitiScheme = {
  createUniversitiScheme: Joi.object().keys({
      name: Joi.string()
      .min(3)
      .max(50)
      .required(),
      adress: Joi.string()
       .min(10),
      manager_id: Joi.number()
        .integer(),
      number: Joi.string()
        .min(3)
        .max(15),
      coords: Joi.string()
        .min(3),
    }),


    updateUniversitiScheme: Joi.object().keys({
      name: Joi.string()
      .min(3)
      .max(50)
      .required(),
      adress: Joi.string()
       .min(10),
      manager_id: Joi.number()
        .integer(),
      number: Joi.string()
        .min(3)
        .max(15),
      coords: Joi.string()
        .min(3),
    })

}

module.exports = universitiScheme;
