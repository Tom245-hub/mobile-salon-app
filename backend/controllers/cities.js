const City = require("../db/models/city");

exports.getCities = async (req, res) => {
  try {
    const cities = await City.find({});
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie GET w endpointcie /cities",
    });
  }
};
