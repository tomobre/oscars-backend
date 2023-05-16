import { fetchMarketData } from "../services";
import { Price } from "../../models/Price";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

export default async function priceUpdate() {
  try {
    const marketData = await fetchMarketData();
    const price = marketData.market_data.current_price.usd.toFixed(3);
    const newPrice = new Price();
    newPrice.number = price;
    newPrice.date = new Date();
    console.log("updating pricce, new price:", newPrice);
    await newPrice.save().catch((error) => {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    });
  } catch (err) {
    console.log(err);
  }
}
