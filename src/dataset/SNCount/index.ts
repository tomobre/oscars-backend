import { fetchServiceNodes } from "../services";
import { SNCount } from "../../models/SNCount";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

export default async function SNCountUpdate() {
  try {
    const nodes = await fetchServiceNodes();
    const serviceNodeActive = nodes.result.service_node_states.filter(
      (node: any) => node.active
    );
    const newSNCount = new SNCount();
    newSNCount.number = serviceNodeActive.length.toString();
    newSNCount.date = new Date();
    await newSNCount.save().catch((error) => {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    });
  } catch (err) {
    console.log(err);
  }
}
