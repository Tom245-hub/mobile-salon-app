const Category = require("../db/models/category");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie GET w endpointcie /categoriesTest",
    });
  }
};
