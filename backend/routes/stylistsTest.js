const express = require("express");

const stylistsTest = require("../controllers/stylistsTest");

const router = express.Router();

router.get("/", stylistsTest.getStylistsTest);
router.get("/:id", stylistsTest.getStylistTest);
router.post("/", stylistsTest.postStylistTest);
router.put("/:id", stylistsTest.putStylistTest);

router.use((request, response) => response.status(404).end());

module.exports = router;
