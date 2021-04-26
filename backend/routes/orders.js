const express = require("express");

const ordersController = require("../controllers/orders");

const router = express.Router();

router.get("/:id", ordersController.getOrder);
router.get("/", ordersController.getOrders);
router.post("/", ordersController.postOrder);
router.use((request, response) => response.status(404).end());

module.exports = router;
