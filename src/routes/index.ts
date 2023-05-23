export {};
const express = require("express");
const router = express.Router();
const config = require("../config/config");

// Import routes
const slide1Route = require("./slide1.route");
const slide2Route = require("./slide2.route");
const slide3Route = require("./slide3.route");

// Create routing
const defaultRoutes = [
  {
    path: "/1",
    route: slide1Route,
  },
  {
    path: "/2",
    route: slide2Route,
  },
  {
    path: "/3",
    route: slide3Route,
  },
];

const devRoutes: any[] = [
  // routes available only in development mode
  // {
  //     path: '/docs',
  //     route: docsRoute,
  // },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

if (config.version) {
  router.get("/version", function (req: any, res: any) {
    res.status(200).json({ version: config.version });
  });
}

module.exports = router;
