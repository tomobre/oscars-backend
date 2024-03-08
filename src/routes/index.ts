export {};
const express = require("express");
const router = express.Router();
const config = require("../config/config");

// Import routes
const slide1Route = require("./slide1.route");
import { Request, Response } from "express";

// Create routing
const defaultRoutes = [
  {
    path: "/1",
    route: slide1Route,
  },
];

/*  const devRoutes: any[] = [
  // routes available only in development mode
  // {
  //     path: '/docs',
  //     route: docsRoute,
  // },
];
 */
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}  */

if (config.version) {
  router.get("/version", function (req: Request, res: Response) {
    res.status(200).json({ version: config.version });
  });
}

module.exports = router;
