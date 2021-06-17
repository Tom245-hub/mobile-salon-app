const express = require("express");
const users = require("../controllers/users");
const router = express.Router();

router.post("/", users.loginUser);

router.use((res) => res.status(404).end());

module.exports = router;
