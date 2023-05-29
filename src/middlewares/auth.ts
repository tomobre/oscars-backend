const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
//const apiKey = require("../config/config.ts").apiKey;

const auth = () => async (req: any, res: any, next: any) => {
  const apiKey = req.get("authorization").replace("Bearer ", "");
  console.log("apikey", apiKey);

  if (apiKey !== envconfig.apiKey || !apiKey) {
    next(
      new ApiError(
        httpStatus.FORBIDDEN,
        "Forbidden: You have to provide the right apiKey"
      )
    );
    /*     throw new ApiError(
      httpStatus.NOT_FOUND,
      "Forbidden: You have to provide the right apiKey"
    ); */
  } else {
    next();
  }
};

module.exports = auth;
