import circulatingSupplyUpdate from "./circulating-supply";
import blockchainSizeUpdate from "./blockchainSize";
import lockedSupplyPercentUpdate from "./lockedSupplyPercent";
import operatorAddressUpdate from "./operatorAddress";
import versionNumberUpdate from "./versionNumber";
import SNCountUpdate from "./SNCount";
import priceUpdate from "./price";
import IPsUpdate from "./ip";

async function updateAll() {
  await priceUpdate();
  await circulatingSupplyUpdate();
  await blockchainSizeUpdate();
  await SNCountUpdate();
  await lockedSupplyPercentUpdate();
  await operatorAddressUpdate();
  await versionNumberUpdate();
  await IPsUpdate();
}

export default async function updateDB(time: number) {
  // await updateAll();
  setInterval(async () => {
    await updateAll();
  }, time);
}
