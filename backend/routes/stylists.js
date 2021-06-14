const express = require("express");
const stylists = require("../controllers/stylists");
const router = express.Router();

router.get("/", stylists.getStylists);
router.get("/:id", stylists.getStylist);
router.post("/", stylists.postStylist);
router.put("/:id", stylists.putStylist);
router.patch("/:id", stylists.patchStylist);
router.delete("/:id", stylists.deleteStylist);

router.use((response) => response.status(404).end());

module.exports = router;
