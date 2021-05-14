const express = require("express");
const { postUserTest } = require("../controllers/usersTest");

const router = express.Router();

router.post("/", postUserTest);
// router.patch("/", patchUser);
router.use((request, response) => response.status(404).end());

module.exports = router;
