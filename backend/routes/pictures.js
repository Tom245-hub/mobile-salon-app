const express = require("express");

const picturesController = require("../controllers/pictures");

const router = express.Router();

router.get("/", picturesController.getPictures);
router.use((request, response) => response.status(404).end());

module.exports = router;
