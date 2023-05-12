export {};
const express = require("express");
const router = express.Router();
const config = require("../config/config");

// Import routes
const reviewsRoute = require("./reviews.route");


// Create routing
const defaultRoutes = [
  {
    path: "/reviews",
    route: reviewsRoute,
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
