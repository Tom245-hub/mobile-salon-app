const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  comment: { type: String },
  stars: { type: Number },
});

const Review = mongoose.model("Review", ReviewSchema, "reviews");

module.exports = Review;
