const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  title: { type: String },
  titleMin: { type: String },
  url: { type: String },
});

const City = mongoose.model("City", CitySchema);

module.exports = City;
