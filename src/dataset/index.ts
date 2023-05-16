import circulatingSupplyUpdate from "./circulating-supply";
import blockchainSizeUpdate from "./blockchainSize";
import lockedSupplyPercentUpdate from "./lockedSupplyPercent";
import operatorAddressUpdate from "./operatorAddress";
import versionNumberUpdate from "./versionNumber";
import SNCountUpdate from "./SNCount";
import priceUpdate from "./price";

function updateAll() {
  priceUpdate();
  circulatingSupplyUpdate();
  blockchainSizeUpdate();
  SNCountUpdate();
  lockedSupplyPercentUpdate();
  operatorAddressUpdate();
  versionNumberUpdate();
}

export default async function updateDB(time: number) {
  //updateAll()
  //versionNumberUpdate();
  setInterval(() => {
    updateAll();
  }, time);
}
