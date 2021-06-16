const Service = require("../db/models/services");

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find({}).populate("category");
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({
      err,
      message: "Błąd serwera - 500.",
    });
  }
};
