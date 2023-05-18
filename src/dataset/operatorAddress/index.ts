import { fetchServiceNodes } from "../services";
import { OperatorAddress } from "../../models/OperatorAddress";
import { handleNodesProp } from "../../utils/handleNodesProp";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

export default async function operatorAddressUpdate() {
  try {
    const nodes = await fetchServiceNodes();
    const SNByOpAddress = handleNodesProp(
      nodes.result.service_node_states,
      "operator_address"
    );
    SNByOpAddress[0] = (SNByOpAddress[0] as string[]).map((name) =>
      name.slice(0, 7)
    );
    SNByOpAddress[0].map(async (operatorName, index) => {
      const OAinDB = await OperatorAddress.findOne({
        where: {
          name: operatorName,
        },
      });

      if (!OAinDB) {
        const operatorAddress = new OperatorAddress();
        operatorAddress.name = operatorName;
        operatorAddress.count = SNByOpAddress[1][index];
        await operatorAddress.save().catch((error) => {
          throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        });
      } else {
        OAinDB.count = SNByOpAddress[1][index];
        await OAinDB.save().catch((error) => {
          throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}
