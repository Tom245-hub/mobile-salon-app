const express = require("express");

const clientsController = require("../controllers/clients");

const router = express.Router();

router.get("/:id", clientsController.getClient);
router.get("/", clientsController.getClients);
router.use((request, response) => response.status(404).end());

module.exports = router;
