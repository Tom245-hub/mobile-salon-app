const Review = require("../db/models/review");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie GET w endpointcie /reviewsTest",
    });
  }
};
