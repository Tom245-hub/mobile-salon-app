const express = require("express");

const categories = require("../controllers/categories");

const router = express.Router();

router.get("/", categories.getCategories);
router.use((request, response) => response.status(404).end());

module.exports = router;
