const { db } = require("../db/models/stylist");
const Stylist = require("../db/models/stylist");
const Picture = require("../db/models/picture");

exports.getStylistsTest = async (req, res) => {
  try {
    // const stylists = await Stylist.find({}).populate("pictures");
    const stylists = await Stylist.find({});
    res.status(200).json(stylists);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w API stylistsTest",
    });
  }
};

exports.getStylistTest = async (req, res) => {
  try {
    const id = req.params.id;
    // const stylist = await Stylist.findOne({ _id: id }).populate("pictures");
    const stylist = await Stylist.findOne({ _id: id });
    const picture = await Picture.findOne({ stylist_id: id });

    const result = { stylist, picture};

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w API stylistTest",
    });
  }
};


exports.postStylistTest = async (req, res) => {
  let stylist;

  try {
    const { firstName, lastName, email, phone, birthYear, zipcode, hairStylExp, makeupStylExp, city } = req.body;

    const stylistData = {
      personalData: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        birthYear: birthYear,
        zipcode: zipcode,
      },
      profileData: {
        title: "",
        url: "",
        img: "",
        text: "",
        position: {
          hairStylist: false,
          makeupStylist: false,
        },
        hairStylExp: hairStylExp,
        makeupStylExp: makeupStylExp,
        city: city,
      },
    };

    stylist = new Stylist(stylistData);

    await stylist.save();
  } catch (err) {
    return res.status(422).json({ message: err.message });
  }

  res.status(201).json(stylist);
};
