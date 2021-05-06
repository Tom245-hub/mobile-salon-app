const servicesData = [
  {
    idService: 1,
    idServiceCategory: 1,
    title: "Fryzura ślubna z lokami",
    url: "/uslugi/fryzury-slubne/1",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Luźne uczesanie ślubne w fale lub loki, bez upięcia.",
    price: 199,
    time: 1,
  },
  {
    idService: 2,
    idServiceCategory: 1,
    title: "Fryzura ślubna z upięciem",
    url: "/uslugi/fryzury-slubne/2",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Upięcie ślubne klasyczne lub z lokami.",
    price: 239,
    time: 1,
  },
  {
    idService: 3,
    idServiceCategory: 2,
    title: "Makijaż ślubny",
    url: "/uslugi/makijaze-slubne/3",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Trwały, profesjonalny makijaż ślubny.",
    price: 199,
    time: 1,
  },
  {
    idService: 4,
    idServiceCategory: 3,
    title: "Modelowanie włosów na szczotkę",
    url: "/uslugi/makijaze-slubne/4",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Dzienne lub wieczorowe modelowanie włosów na szczotkę. Idealne do krótkich włosów.",
    price: 119,
    time: 1,
  },
  {
    idService: 5,
    idServiceCategory: 3,
    title: "Stylizacja włosów w loki",
    url: "/uslugi/fryzury-okazyjne/5",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Dzienne lub wieczorowe stylizowanie włosów wloki lub fale, bez upięcia.",
    price: 199,
    time: 1,
  },
  {
    idService: 6,
    idServiceCategory: 3,
    title: "Stylizacja włosów z upięciem",
    url: "/uslugi/fryzury-okazyjne/6",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Stylizacja w kok lub upięcie.",
    price: 239,
    time: 1,
  },
  {
    idService: 7,
    idServiceCategory: 4,
    title: "Makijaż okazyjny",
    url: "/uslugi/makijaze-okazyjne/7",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Makijaż dzienny, wieczorowy lub biznesowy.",
    price: 199,
    time: 1,
  },
];

exports.getServices = (request, response, next) => {
  try {
    response.status(200).json({
      services: servicesData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services",
    });
  }
};

exports.getService = (request, response, next) => {
  try {
    const { id } = request.params;
    const serviceToSend = servicesData.find((service) => service.idService === id);

    if (!serviceToSend) {
      response.status(404).json({
        message: "Nie znaleziono katogorii usługi o podanym id",
      });

      return;
    }

    response.status(200).json({
      idService: idServiceToSend,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services/:id",
    });
  }
};

exports.servicesData = servicesData;
