const Review = require("../db/models/review");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({
      err,
      message: "Błąd serwera - 500.",
    });
  }
};
