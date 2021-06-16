const Slide = require("../db/models/slide");

exports.getSlider = async (req, res) => {
  try {
    const slider = await Slide.find({});
    res.status(200).json(slider);
  } catch (err) {
    res.status(500).json({
      err,
      message: "Błąd serwera - 500.",
    });
  }
};
