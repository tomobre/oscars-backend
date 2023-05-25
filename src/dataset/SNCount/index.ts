import { fetchServiceNodes } from "../services";
import { SNCount } from "../../models/SNCount";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");
import { Node } from "../../types/nodes";
import nodesValidate from "../../validations/nodes.validation";

export default async function SNCountUpdate() {
  try {
    const nodes = await fetchServiceNodes();
    const { error } = nodesValidate(nodes?.result?.service_node_states);
    if (!error) {
      const serviceNodeActive = nodes?.result?.service_node_states.filter(
        (node: Node) => node.active
      );
      const newSNCount = new SNCount();
      newSNCount.number = serviceNodeActive.length.toString();
      newSNCount.date = new Date();
      await newSNCount.save().catch((error) => {
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
