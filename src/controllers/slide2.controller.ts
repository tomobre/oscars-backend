export {};
/** Node Modules */
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
/** Schemas */
import { Country } from "../models/Country";
import { ASN } from "../models/ASN";
import { IP } from "../models/IP";
import { SLICEMAIN } from "../constants";
/** Types */
import { Request, Response } from "express";

const getAll = catchAsync(async (req: Request, res: Response) => {
  const countriesAll = await Country.find({
    relations: ["ips"],
  });
  countriesAll.sort((a: Country, b: Country) => b.ips.length - a.ips.length);
  const countries = {
    main: countriesAll.slice(0, SLICEMAIN),
    rest: countriesAll.slice(SLICEMAIN + 1),
  };
  const ASNsAll = await ASN.find({ relations: ["ips"] });
  ASNsAll.sort((a: ASN, b: ASN) => b.ips.length - a.ips.length);
  const ASNs = {
    main: ASNsAll.slice(0, SLICEMAIN),
    rest: ASNsAll.slice(SLICEMAIN + 1),
  };
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
