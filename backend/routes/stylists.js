const express = require("express");
const stylists = require("../controllers/stylists");
const router = express.Router();

router.get("/", stylists.getStylists);
router.get("/:id", stylists.getStylist);
router.put("/:id", stylists.putStylist);

router.use((request, response) => response.status(404).end());

module.exports = router;
