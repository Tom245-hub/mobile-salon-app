const express = require("express");

const reviewsController = require("../controllers/reviews");

const router = express.Router();

router.get("/", reviewsController.getReviews);
router.use((request, response) => response.status(404).end());

module.exports = router;
