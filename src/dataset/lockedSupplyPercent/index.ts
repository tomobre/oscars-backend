import { fetchServiceNodes, fetchMarketData } from "../services";
import { LockedSupplyPercent } from "../../models/LockedSupplyPercent";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");
import { ROUNDUPNUMBER } from "../../constants";

export default async function lockedSupplyPercentUpdate() {
  try {
    const marketData = await fetchMarketData();
    const nodes = await fetchServiceNodes();
    const circulatingSupply = marketData.market_data.circulating_supply;
    const serviceNodeActive = nodes.result.service_node_states.filter(
      (node: any) => node.active
    );
    const totalContributedCount =
      serviceNodeActive.reduce((accumulator: any, object: any) => {
        return accumulator + object.total_contributed;
      }, 0) / ROUNDUPNUMBER;
    const lockedSupplyPercent = (
      (totalContributedCount * 100) /
      circulatingSupply
    ).toFixed(2);
    const newLockedSupplyPercent = new LockedSupplyPercent();
    newLockedSupplyPercent.number = lockedSupplyPercent.toString();
    newLockedSupplyPercent.date = new Date();
    await newLockedSupplyPercent.save().catch((error) => {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    });
  } catch (err) {
    console.log(err);
  }
}
