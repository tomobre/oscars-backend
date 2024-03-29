import { fetchBlockchainSize } from "../services";
import { BlockchainSize } from "../../models/BlockchainSize";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");
import { ROUNDUPNUMBER } from "../../constants";
import blockchainSizeValidate from "../../validations/blockchainSize.validation";

export default async function blockchainSizeUpdate() {
  try {
    const blockchainData = await fetchBlockchainSize();
    const { error } = blockchainSizeValidate(
      blockchainData?.result?.database_size
    );
    if (!error) {
      const blockChainSize = (
        blockchainData.result.database_size / ROUNDUPNUMBER
      ).toString();
      const newBlockChainSize = new BlockchainSize();
      newBlockChainSize.number = blockChainSize;
      newBlockChainSize.date = new Date();
      await newBlockChainSize.save().catch((error) => {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
      });
    } else {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        error.details[0].message
      );
    }
  } catch (err) {
    throw err;
  }
}
