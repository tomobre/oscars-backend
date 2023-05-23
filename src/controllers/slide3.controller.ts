export {};
/** Node Modules */
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
/** Schemas */
import { VersionNumber } from "../models/VersionNumber";
import { IP } from "../models/IP";
import { SLICEMAIN } from "../constants";

const getAll = catchAsync(async (req: any, res: any) => {
  const IPsAll = await IP.find({
    relations: ["country", "ASN"],
    order: {
      SNcount: "DESC",
    },
  });
  const IPs = {
    main: IPsAll.slice(0, SLICEMAIN),
    rest: IPsAll.slice(SLICEMAIN + 1),
  };
  const SNByVersionNumber = await VersionNumber.find();
  const result = {
    IPs,
    SNByVersionNumber,
  };
  res.status(httpStatus.OK).json(result);
});

module.exports = {
  getAll,
};
