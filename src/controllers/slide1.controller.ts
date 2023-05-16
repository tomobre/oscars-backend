export {};
/** Node Modules */
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
import { DATE } from "../constants";
import { MoreThan } from "typeorm";
/** Schemas */
import { Price } from "../models/Price";
import { CirculatingSupply } from "../models/CirculatingSupply";
import { BlockchainSize } from "../models/BlockchainSize";
import { SNCount } from "../models/SNCount";
import { LockedSupplyPercent } from "../models/LockedSupplyPercent";
import { OperatorAddress } from "../models/OperatorAddress";
import { VersionNumber } from "../models/VersionNumber";

const getAll = catchAsync(async (req: any, res: any) => {
  const price = await Price.find({
    where: {
      date: MoreThan(DATE),
    },
  });
  const circulatingSupply = await CirculatingSupply.find({
    where: {
      date: MoreThan(DATE),
    },
  });
  const blockChainSize = await BlockchainSize.find({
    where: {
      date: MoreThan(DATE),
    },
  });
  const snCount = await SNCount.find({
    where: {
      date: MoreThan(DATE),
    },
  });
  const lockedSupplyPercent = await LockedSupplyPercent.find({
    where: {
      date: MoreThan(DATE),
    },
  });
  const SNByoperatorAddress = await OperatorAddress.find();
  const SNByVersionNumber = await VersionNumber.find();

  const result = {
    price,
    circulatingSupply,
    blockChainSize,
    snCount,
    lockedSupplyPercent,
    SNByoperatorAddress,
    SNByVersionNumber,
  };
  res.status(httpStatus.OK).json(result);
});

module.exports = {
  getAll,
};