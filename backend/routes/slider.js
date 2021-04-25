const express = require("express");

const sliderController = require("../controllers/slider");

const router = express.Router();

router.get("/", sliderController.getSlider);
router.use((request, response) => response.status(404).end());

module.exports = router;
