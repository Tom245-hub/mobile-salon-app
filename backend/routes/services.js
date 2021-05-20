const express = require("express");

const services = require("../controllers/services");

const router = express.Router();

// router.get("/:id", servicesController.getService);
router.get("/", services.getServices);
router.use((request, response) => response.status(404).end());

module.exports = router;
