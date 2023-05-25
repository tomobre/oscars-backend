export {};
const Joi = require("joi");

const schema = Joi.number().required();

export default function blockchainSizeValidate(value: number) {
  return schema.validate(value);
}
