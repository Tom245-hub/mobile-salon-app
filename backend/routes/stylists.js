const express = require("express");
const stylists = require("../controllers/stylists");
const router = express.Router();

router.get("/", stylists.getStylists);
router.get("/:id", stylists.getStylist);
router.post("/", stylists.createStylist);
router.patch("/:id", stylists.editStylist);
router.delete("/:id", stylists.deleteStylist);

router.use((res) => res.status(404).end());

module.exports = router;
