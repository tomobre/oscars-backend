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
  await lockedSupplyPercentUpdate();
  await SNCountUpdate();
  await blockchainSizeUpdate();
  await operatorAddressUpdate();
  await versionNumberUpdate();
  await IPsUpdate();
}

export default async function updateDB(time: number) {
  /*   try {
    await updateAll();
  } catch (err) {
    console.log(err);
  }
 */
  setInterval(async () => {
    await updateAll();
  }, time);
}
