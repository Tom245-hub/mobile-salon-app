const express = require("express");

const citiesTest = require("../controllers/citiesTest");

const router = express.Router();

router.get("/", citiesTest.getCitiesTest);

router.use((request, response) => response.status(404).end());

module.exports = router;
