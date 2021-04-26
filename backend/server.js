const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const stylistsRoutes = require("./routes/stylists");
const servicesRoutes = require("./routes/services");
const ordersRoutes = require("./routes/orders");
const sliderRoutes = require("./routes/slider");

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use("/stylists", stylistsRoutes);
server.use("/services", servicesRoutes);
server.use("/orders", ordersRoutes);
server.use("/slider", sliderRoutes);

server.listen(8000, () => console.log("Server is started."));
