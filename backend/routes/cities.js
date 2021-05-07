const express = require("express");

const citiesController = require("../controllers/cities");

const router = express.Router();

router.get("/", citiesController.getCities);
router.use((request, response) => response.status(404).end());

module.exports = router;
