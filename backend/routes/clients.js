const express = require("express");

const clients = require("../controllers/clients");

const router = express.Router();

router.get("/", clients.getClients);

router.use((request, response) => response.status(404).end());

module.exports = router;
