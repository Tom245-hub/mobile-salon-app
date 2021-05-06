const picturesData = [
  {
    idPicture: 1,
    idStylist: 1,
    img: "/img/stylist/warszawa/01-edyta/01-fryzura-01.jpg",
    title: "Stylizacja włosów w loki",
  },
  {
    idPicture: 2,
    idStylist: 1,
    img: "/img/stylist/warszawa/01-edyta/01-fryzura-02.jpg",
    title: "Stylizacja włosów w loki",
  },
  {
    idPicture: 3,
    idStylist: 1,
    img: "/img/stylist/warszawa/01-edyta/01-fryzura-03.jpg",
    title: "Stylizacja włosów z upięciem",
  },
  {
    idPicture: 4,
    idStylist: 1,
    img: "/img/stylist/warszawa/01-edyta/01-fryzura-04.jpg",
    title: "Stylizacja włosów z upięciem",
  },
  {
    idPicture: 4,
    idStylist: 1,
    img: "/img/stylist/warszawa/01-edyta/01-fryzura-05.jpg",
    title: "Stylizacja włosów z upięciem i warkoczem",
  },
  {
    idPicture: 5,
    idStylist: 1,
    img: "/img/stylist/warszawa/01-edyta/01-fryzura-06.jpg",
    title: "Stylizacja włosów z upięciem i warkoczem",
  },
  {
    idPicture: 6,
    idStylist: 1,
    img: "/img/stylist/warszawa/01-edyta/01-fryzura-07.jpg",
    title: "Stylizacja włosów z warkoczem i lokami",
  },
];

exports.getPictures = (request, response, next) => {
  try {
    response.status(200).json({
      pictures: picturesData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /pictures",
    });
  }
};

exports.picturesData = picturesData;
