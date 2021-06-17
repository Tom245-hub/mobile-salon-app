const express = require("express");
const slider = require("../controllers/slider");
const router = express.Router();

router.get("/", slider.getSlider);

router.use((res) => res.status(404).end());

module.exports = router;
