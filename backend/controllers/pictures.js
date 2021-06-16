const Picture = require("../db/models/picture");

exports.getPictures = async (req, res) => {
  try {
    const pictures = await Picture.find({});
    res.status(200).json(pictures);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie GET w endpointcie pictures",
    });
  }
};

exports.getPicture = async (req, res) => {
  try {
    const id = req.params.id;
    const picture = await Picture.findOne({ _id: id });
    res.status(200).json(picture);
  } catch (err) {
    res.status(500).json({
      err,
      message: "Błąd serwera - 500.",
    });
  }
};
