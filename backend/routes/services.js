const express = require("express");

const servicesController = require("../controllers/services");

const router = express.Router();

router.get("/:id", servicesController.getService);
router.get("/", servicesController.getServices);
router.use((request, response) => response.status(404).end());

module.exports = router;
