export {};
const express = require("express");
const slide2Controller = require("../controllers/slide2.controller");
const router = express.Router();
//const auth = require("../middlewares/auth");

// router.get("/:id", reviewsController.get);
router.get("/", slide2Controller.getAll);

module.exports = router;
