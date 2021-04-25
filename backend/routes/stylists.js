const express = require("express");

const stylistsController = require("../controllers/stylists");

const router = express.Router();

router.get("/:id", stylistsController.getStylist);
router.get("/", stylistsController.getStylists);
router.post("/", stylistsController.postStylist);
router.put("/", stylistsController.putStylist);
router.delete("/:id", stylistsController.deleteStylist);
router.use((request, response) => response.status(404).end());

module.exports = router;
