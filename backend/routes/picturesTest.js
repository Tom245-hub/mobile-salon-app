const express = require("express");

const picturesTest = require("../controllers/picturesTest");

const router = express.Router();

router.get("/", picturesTest.getPicturesTest);
router.get("/:id", picturesTest.getPictureTest);

router.use((request, response) => response.status(404).end());

module.exports = router;
