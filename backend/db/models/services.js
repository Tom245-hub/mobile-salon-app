const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: { type: String },
  url: { type: String },
  img: { type: String },
  text: { type: String },
  category: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Service = mongoose.model("Service", ServiceSchema, "services");

module.exports = Service;
