const Slide = require("../db/models/slide");
// const { db } = require("../db/models/slider");

exports.getSliderTest = async (req, res) => {
  try {
    const slider = await Slide.find({});
    res.status(200).json(slider);
    // console.log(slider);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /slider",
    });
  }
};
