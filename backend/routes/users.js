const express = require("express");
const { postUser } = require("../controllers/users");

const router = express.Router();

router.post("/", postUser);
router.use((request, response) => response.status(404).end());

module.exports = router;
