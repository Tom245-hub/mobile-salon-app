const City = require("../db/models/city");

exports.getCities = async (req, res) => {
  try {
    const cities = await City.find({});
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({
      err,
      message: "Błąd serwera - 500.",
    });
  }
};
