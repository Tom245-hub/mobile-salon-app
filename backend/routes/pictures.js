const express = require("express");

const pictures = require("../controllers/pictures");

const router = express.Router();

router.get("/", pictures.getPictures);
router.get("/:id", pictures.getPicture);

router.use((request, response) => response.status(404).end());

module.exports = router;
