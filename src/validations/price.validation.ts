export {};
const Joi = require("joi");

const schema = Joi.string().required();

export default function priceValidate(value: string) {
  return schema.validate(value);
}
