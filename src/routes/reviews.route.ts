export {};
const express = require("express");
const reviewsController = require("../controllers/reviews.controller");
const router = express.Router();
const auth = require("../middlewares/auth");

// router.get("/:id", reviewsController.get);
router.get("/", reviewsController.getAll);
router.post("/", reviewsController.post);
router.put("/:id", reviewsController.put);
router.delete("/:id", reviewsController.remove);

module.exports = router;
