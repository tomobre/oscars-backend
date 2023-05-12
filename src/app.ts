const express = require("express");
const morgan = require("./config/morgan");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const routes = require("./routes");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
import "reflect-metadata";
const { errorConverter, errorHandler } = require("./middlewares/error");
const config = require("./config/config");

const app = express();
app.use(morgan.successHandler);
app.use(morgan.errorHandler);

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: false }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// parse cookies
app.use(cookieParser());

// This is to route other routes
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

// console.log(app._router.stack)

export default app;
