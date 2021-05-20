const Slide = require("../db/models/slide");

exports.getSlider = async (req, res) => {
  try {
    const slider = await Slide.find({});
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie GET w endpointcie /slider",
    });
  }
};
