const Category = require("../db/models/category");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({
      err,
      message: "Błąd serwera - 500.",
    });
  }
};
