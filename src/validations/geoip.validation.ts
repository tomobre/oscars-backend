export {};
import { Node } from "../types/nodes";
const Joi = require("joi");

const schema = Joi.array()
  .required()
  .items(
    Joi.object({
      asn: Joi.string(),
      code: Joi.object({
        state: Joi.any(),
        country: Joi.string(),
        registeredCountry: Joi.string(),
        continent: Joi.string(),
      }),
      continent: Joi.string(),
      country: Joi.string(),
      geonameId: Joi.object({
        city: Joi.any(),
        state: Joi.any(),
        country: Joi.string(),
        registeredCountry: Joi.string(),
        continent: Joi.string(),
      }),
      ip: Joi.string(),
      location: Joi.object({
        accuracy_radius: Joi.number(),
        latitude: Joi.number(),
        longitude: Joi.number(),
        time_zone: Joi.string(),
      }),
      registeredCountry: Joi.string(),
      state: Joi.any(),
    })
  );

export default function geoipValidate(value: Node[]) {
  return schema.validate(value);
}
