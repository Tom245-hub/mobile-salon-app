const express = require("express");
const clients = require("../controllers/clients");
const router = express.Router();

router.get("/", clients.getClients);

router.use((res) => res.status(404).end());

module.exports = router;
