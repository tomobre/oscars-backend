import { fetchServiceNodes } from "../services";
import { VersionNumber } from "../../models/VersionNumber";
import { handleNodesProp } from "../../utils/handleNodesProp";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");
import nodesValidate from "../../validations/nodes.validation";

export default async function versionNumberUpdate() {
  try {
    const nodes = await fetchServiceNodes();
    const { error } = nodesValidate(nodes?.result?.service_node_states);
    if (!error) {
      const SNByVersionNumber = handleNodesProp(
        nodes?.result.service_node_states,
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
          versionNumber.name = versionNumberName;
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
