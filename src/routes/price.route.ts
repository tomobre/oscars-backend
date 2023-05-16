export {};
const express = require("express");
const priceController = require("../controllers/price.controller");
const router = express.Router();
//const auth = require("../middlewares/auth");

// router.get("/:id", reviewsController.get);
router.get("/", priceController.getAll);

module.exports = router;
