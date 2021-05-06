const express = require("express");

const categoriesController = require("../controllers/categories");

const router = express.Router();

router.get("/", categoriesController.getCategories);
router.use((request, response) => response.status(404).end());

module.exports = router;
