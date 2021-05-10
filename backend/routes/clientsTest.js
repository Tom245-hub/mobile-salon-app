const express = require("express");

const clientsTest = require("../controllers/clientsTest");

const router = express.Router();

router.get("/", clientsTest.getClientsTest);
router.get("/:id", clientsTest.getClientTest);

router.use((request, response) => response.status(404).end());

module.exports = router;
