const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: { type: String },
  url: { type: String },
  img: { type: String },
  text: { type: String },
});

const Category = mongoose.model("Category", CategorySchema, "categories");

module.exports = Category;
