const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const stylistsRoutes = require("./routes/stylists");
const clientsRoutes = require("./routes/clients");

const servicesRoutes = require("./routes/services");
const categoriesRoutes = require("./routes/categories");
const ordersRoutes = require("./routes/orders");

const picturesRoutes = require("./routes/pictures");
const reviewsRoutes = require("./routes/reviews");
const sliderRoutes = require("./routes/slider");
const usersRoutes = require("./routes/users");

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use("/stylists", stylistsRoutes);
server.use("/clients", clientsRoutes);

server.use("/services", servicesRoutes);
server.use("/categories", categoriesRoutes);

server.use("/pictures", picturesRoutes);
server.use("/orders", ordersRoutes);
server.use("/reviews", reviewsRoutes);
server.use("/slider", sliderRoutes);
server.use("/users", usersRoutes);

server.listen(8000, () => console.log("Server is started."));
