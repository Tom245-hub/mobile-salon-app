const Category = require("../db/models/category");

exports.getCategoriesTest = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /categoriesTest",
    });
  }
};
