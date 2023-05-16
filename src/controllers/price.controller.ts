export {};
/** Node Modules */
const httpStatus = require("http-status");

const catchAsync = require("../utils/catchAsync");
import { DATE } from "../constants";
import { MoreThan } from "typeorm";
/** Schemas */
import { Price } from "../models/Price";
/** Services */

const getAll = catchAsync(async (req: any, res: any) => {
  const result = await Price.find({
    where: {
      date: MoreThan(DATE),
    },
  });
  res.status(httpStatus.OK).json(result);
});

module.exports = {
  getAll,
};
