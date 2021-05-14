const express = require("express");

const reviewsTest = require("../controllers/reviewsTest");

const router = express.Router();

router.get("/", reviewsTest.getReviewsTest);
router.use((request, response) => response.status(404).end());

module.exports = router;
