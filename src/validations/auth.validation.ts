export {};
const Joi = require("joi");
const { password } = require("./custom.validation");

const register = {
  body: Joi.object().keys({
    //  firstname: Joi.string().required(),
    //  lastname: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    // country: Joi.string().required(),
    //  notify: Joi.boolean().required(),
    iscoach: Joi.boolean().required(),
    //    plan: Joi.string().required(),
  }),
};

const registerCoach1 = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    typeCoaching: Joi.string().required(),
    notify: Joi.boolean().required(),
    description: Joi.string().required(),
    email: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  registerCoach1,
};
