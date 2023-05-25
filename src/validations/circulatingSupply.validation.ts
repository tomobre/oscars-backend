export {};
const Joi = require("joi");

const schema = Joi.number().required();

export default function circulatingASupplyValidate(value: number) {
  return schema.validate(value);
}
