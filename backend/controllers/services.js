const Service = require("../db/models/services");

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find({}).populate("category");
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie GET w endpointcie servicesTest",
    });
  }
};
