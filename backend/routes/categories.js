const express = require("express");
const categories = require("../controllers/categories");
const router = express.Router();

router.get("/", categories.getCategories);

router.use((res) => res.status(404).end());

module.exports = router;
