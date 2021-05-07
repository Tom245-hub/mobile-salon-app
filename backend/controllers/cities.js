const citiesData = [
  {
    idCity: 1,
    title: "Warszawa",
    titleMin: "warszawa",
    url: "/stylistki?city=warszawa",
  },
  {
    idCity: 2,
    title: "Kraków",
    titleMin: "krakow",
    url: "/stylistki?city=krakow",
  },
  {
    idCity: 3,
    title: "Wrocław",
    titleMin: "wroclaw",
    url: "/stylistki?city=wroclaw",
  },
  {
    idCity: 4,
    title: "Poznań",
    titleMin: "poznan",
    url: "/stylistki?city=poznan",
  },
  {
    idCity: 5,
    title: "Gdańsk",
    titleMin: "gdansk",
    url: "/stylistki?city=gdansk",
  },
];

exports.getCities = (request, response, next) => {
  try {
    response.status(200).json({
      cities: citiesData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /cities",
    });
  }
};

exports.citiesData = citiesData;
