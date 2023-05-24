#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "./src/app";
import { intializeDB } from "./src/config/db";
const config = require("./src/config/config");
const logger = require("./src/config/logger");
import { TIME } from "./src/constants";
import updateDB from "./src/dataset";
const time = TIME * 3600000;

/**
 * Handle clusters configuration
 */

var count = 1;
if (config.env === "production") {
  count = require("os").cpus().length;
}

/**
 * Services Initialization
 */
intializeDB();
updateDB(time);

let server = app.listen(process.env.PORT || 3000);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  logger.info(`Listening to port ${config.port}`);
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }
}
