import { fetchMarketData } from "../services";
import { CirculatingSupply } from "../../models/CirculatingSupply";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

export default async function circulatingSupplyUpdate() {
  try {
    const marketData = await fetchMarketData();
    const circulatingSupply =
      marketData.market_data.circulating_supply.toString();
    const newCirculatingSupply = new CirculatingSupply();
    newCirculatingSupply.number = circulatingSupply;
    newCirculatingSupply.date = new Date();
    await newCirculatingSupply.save().catch((error) => {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    });
  } catch (err) {
    console.log(err);
  }
}
