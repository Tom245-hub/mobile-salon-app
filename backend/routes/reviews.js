const express = require("express");

const reviews = require("../controllers/reviews");

const router = express.Router();

router.get("/", reviews.getReviews);
router.use((request, response) => response.status(404).end());

module.exports = router;
