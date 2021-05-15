// const { db } = require("../db/models/stylist");
const Stylist = require("../db/models/stylist");
// const Picture = require("../db/models/picture");

exports.getStylistsTest = async (req, res) => {
  try {
    // const stylists = await Stylist.find({}).populate("pictures");
    const stylists = await Stylist.find({}).populate("portfolio");
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
    const stylist = await Stylist.findOne({ _id: id });
    res.status(200).json(stylist);
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
      portfolio: [],
    };

    stylist = new Stylist(stylistData);

    await stylist.save();
  } catch (err) {
    return res.status(422).json({ message: err.message });
  }

  res.status(201).json(stylist);
};

// aktualizowanie stylistki
exports.putStylistTest = async (req, res) => {
  const id = req.params.id;

  const stylist = await Stylist.findOne({ _id: id });

  stylist.personalData.firstName = req.body.firstName;
  stylist.personalData.lastName = req.body.lastName;
  stylist.personalData.email = req.body.email;
  stylist.personalData.phone = req.body.phone;
  stylist.personalData.birthYear = req.body.birthYear;
  stylist.personalData.zipcode = req.body.zipcode;
  // stylist.personalData.address.city = req.body.address.city;

  await stylist.save();

  res.status(201).json(stylist);
};
