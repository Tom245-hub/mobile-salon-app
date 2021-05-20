const express = require("express");

const cities = require("../controllers/cities");

const router = express.Router();

router.get("/", cities.getCities);

router.use((request, response) => response.status(404).end());

module.exports = router;
