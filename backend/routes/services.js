const express = require("express");
const services = require("../controllers/services");
const router = express.Router();

router.get("/", services.getServices);

router.use((res) => res.status(404).end());

module.exports = router;
