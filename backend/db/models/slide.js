const mongoose = require("mongoose");

const SlideSchema = new mongoose.Schema({
  title: { type: String },
  url: { type: String },
  img: { type: String },
  text: { type: String },
});

const Slide = mongoose.model("Slide", SlideSchema, "slider");

module.exports = Slide;
