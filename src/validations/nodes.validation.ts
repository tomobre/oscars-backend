export {};
import { Node } from "../types/nodes";
const Joi = require("joi");

const schema = Joi.array()
  .required()
  .items(
    Joi.object({
      active: Joi.boolean(),
      operator_address: Joi.string(),
      public_ip: Joi.string(),
      service_node_version: Joi.array().required().items(Joi.number()),
      total_contributed: Joi.number(),
    })
  );

export default function nodesValidate(value: Node[]) {
  return schema.validate(value, { allowUnknown: true });
}
