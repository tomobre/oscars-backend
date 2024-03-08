export {};
const express = require("express");
const slide1Controller = require("../controllers/slide1.controller");
const router = express.Router();
//const auth = require("../middlewares/auth");

// router.get("/:id", reviewsController.get);
router.post("/", slide1Controller.post);

module.exports = router;
