const express = require("express");

const categoriesTest = require("../controllers/categoriesTest");

const router = express.Router();

router.get("/", categoriesTest.getCategoriesTest);
router.use((request, response) => response.status(404).end());

module.exports = router;
