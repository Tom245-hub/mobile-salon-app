const express = require("express");

const sliderTest = require("../controllers/sliderTest");

const router = express.Router();

router.get("/", sliderTest.getSliderTest);
router.use((request, response) => response.status(404).end());

module.exports = router;
