const Stylist = require("../db/models/stylist");

exports.getStylists = async (req, res) => {
  try {
    const stylists = await Stylist.find({}).populate("portfolio").populate("reviews");
    res.status(200).json(stylists);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie GET w endpointcie stylists",
    });
  }
};

exports.getStylist = async (req, res) => {
  try {
    const id = req.params.id;
    const stylist = await Stylist.findOne({ _id: id })
      .populate("portfolio")
      .populate("reviews");
    res.status(200).json(stylist);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie GET w endpointcie stylist",
    });
  }
};

exports.postStylist = async (req, res) => {
  let stylist;

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      birthYear,
      zipcode,
      hairStylExp,
      makeupStylExp,
      city,
    } = req.body;

    // 1. Jeśli email jest w bazie:

    // if (true) {
    //   res.status(409).json({
    //     message: "Stylistka o podanym adres email jest już zarejestrowana",
    //   });

    //   return;
    // }

    // 2. Jeśli email nie jest w bazie:

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
      reviews: [],
      orders: [],
    };

    stylist = new Stylist(stylistData);

    await stylist.save();
    res.status(201).json({
      message: "Założyliśmy Twoje konto: Login: xx, hasło: yyy",
      stylist,
    });
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

exports.putStylist = async (req, res) => {
  try {
    const id = req.params.id;

    const stylist = await Stylist.findOne({ _id: id });
    const {
      firstName,
      lastName,
      email,
      phone,
      birthYear,
      zipcode,
      title,
      img,
      text,
      hairStylExp,
      makeupStylExp,
      city,
    } = req.body;

    firstName && (stylist.personalData.firstName = firstName);
    lastName && (stylist.personalData.lastName = lastName);
    email && (stylist.personalData.email = email);
    phone && (stylist.personalData.phone = phone);
    birthYear && (stylist.personalData.birthYear = birthYear);
    zipcode && (stylist.personalData.zipcode = zipcode);

    title && (stylist.profileData.title = title);
    img && (stylist.profileData.img = img);
    text && (stylist.profileData.text = text);
    hairStylExp && (stylist.profileData.hairStylExp = hairStylExp);
    makeupStylExp && (stylist.profileData.makeupStylExp = makeupStylExp);
    city && (stylist.profileData.city = city);

    await stylist.save();

    res.status(201).json(stylist);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie PUT w endpointcie stylist",
    });
  }
};

exports.patchStylist = async (req, res) => {
  console.log(5);
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    birthYear,
    zipcode,
    title,
    img,
    text,
    hairStylExp,
    makeupStylExp,
    city,
  } = req.body;
  // const id = req.params.id;
  console.log(req.body);

  let stylist;
  try {
    stylist = await Stylist.findOne({ _id: id });
  } catch (err) {
    res.status(404).json({
      error,
      message: "Nie znaleziono stylistki o tym ID",
    });
  }

  firstName && (stylist.personalData.firstName = firstName);
  lastName && (stylist.personalData.lastName = lastName);
  email && (stylist.personalData.email = email);
  phone && (stylist.personalData.phone = phone);
  birthYear && (stylist.personalData.birthYear = birthYear);
  zipcode && (stylist.personalData.zipcode = zipcode);

  title && (stylist.profileData.title = title);
  img && (stylist.profileData.img = img);
  text && (stylist.profileData.text = text);
  hairStylExp && (stylist.profileData.hairStylExp = hairStylExp);
  makeupStylExp && (stylist.profileData.makeupStylExp = makeupStylExp);
  city && (stylist.profileData.city = city);

  try {
    await stylist.save();
  } catch (err) {
    res.status(500).json({
      error,
      message: "Błąd w metodzie PATCH w endpointcie stylists",
    });
  }

  res.status(200).json({
    message: "Informacje zostały poprawnie wysłane",
    stylist,
  });
};

exports.deleteStylist = async (req, res) => {
  const id = req.params.id;

  let stylist;
  try {
    stylist = await Stylist.findOne({ _id: id });
    await stylist.delete();
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ message: "Konto stylistki zostało usunięte" });
};
