export {};
/** Node Modules */
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
/** Schemas */
import { Country } from "../models/Country";
import { ASN } from "../models/ASN";
import { IP } from "../models/IP";

const getAll = catchAsync(async (req: any, res: any) => {
  const countries = await Country.find({ relations: ["ips"] });
  const ASNs = await ASN.find({ relations: ["ips"] });
  const IPs = await IP.find({ relations: ["country", "ASN"] });

  const result = {
    countries,
    ASNs,
    IPs,
  };
  res.status(httpStatus.OK).json(result);
});

module.exports = {
  getAll,
};
