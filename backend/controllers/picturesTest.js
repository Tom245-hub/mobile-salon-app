const { db } = require("../db/models/picture");
const Picture = require("../db/models/picture");

exports.getPicturesTest = async (req, res) => {
  try {
    const pictures = await Picture.find({});
    res.status(200).json(pictures);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w API picturesTest",
    });
  }
};

exports.getPictureTest = async (req, res) => {
  try {
    const id = req.params.id;
    const picture = await Picture.findOne({ _id: id });
    res.status(200).json(picture);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w API pictureTest",
    });
  }
};
