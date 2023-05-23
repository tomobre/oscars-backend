export {};
const express = require("express");
const slide3Controller = require("../controllers/slide3.controller");
const router = express.Router();
//const auth = require("../middlewares/auth");

// router.get("/:id", reviewsController.get);
router.get("/", slide3Controller.getAll);

module.exports = router;
