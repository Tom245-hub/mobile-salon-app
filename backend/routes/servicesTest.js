const express = require("express");

const servicesTest = require("../controllers/servicesTest");

const router = express.Router();

// router.get("/:id", servicesController.getService);
router.get("/", servicesTest.getServicesTest);
router.use((request, response) => response.status(404).end());

module.exports = router;
