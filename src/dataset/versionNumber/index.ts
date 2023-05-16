import { fetchServiceNodes } from "../services";
import { VersionNumber } from "../../models/VersionNumber";
import { handleNodesProp } from "../../utils/handleNodesProp";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

export default async function versionNumberUpdate() {
  try {
    const nodes = await fetchServiceNodes();
    const SNByVersionNumber = handleNodesProp(
      nodes.result.service_node_states,
      "service_node_version"
    );
    SNByVersionNumber[0].map(async (versionNumberName, index) => {
      const versionNumberInDB = await VersionNumber.findOne({
        where: {
          name: versionNumberName,
        },
      });

      if (!versionNumberInDB) {
        const versionNumber = new VersionNumber();
        versionNumber.name = SNByVersionNumber[0][index];
        versionNumber.count = SNByVersionNumber[1][index];
        await versionNumber.save().catch((error) => {
          throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        });
      } else {
        versionNumberInDB.count = SNByVersionNumber[1][index];
        await versionNumberInDB.save().catch((error) => {
          throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}
