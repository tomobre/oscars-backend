import { fetchMarketData } from "../services";
import { Price } from "../../models/Price";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");
import priceValidate from "../../validations/price.validation";

export default async function priceUpdate() {
  try {
    const marketData = await fetchMarketData();

    const price = marketData.market_data.current_price.usd.toFixed(3);
    const { error } = priceValidate(price);
    if (!error) {
      const newPrice = new Price();
      newPrice.number = price;
      newPrice.date = new Date();
      await newPrice.save().catch((error) => {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
      });
    } else {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        error.details[0].message
      );
    }
  } catch (err) {
    console.log(err);
  }
}
