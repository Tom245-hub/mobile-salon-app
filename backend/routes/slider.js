const express = require("express");

const slider = require("../controllers/slider");

const router = express.Router();

router.get("/", slider.getSlider);
router.use((request, response) => response.status(404).end());

module.exports = router;
