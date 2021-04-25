const { v4: uuid } = require("uuid");

const servicesData = [
  {
    id: uuid(),
    title: "Fryzury ślubne z dojazdem",
    url: "/uslugi/fryzury-slubne",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Upięcia, koki z welonem, warkocze, ozdoby.",
  },
  {
    id: uuid(),
    title: "Makijaże ślubne z dojazdem",
    url: "/uslugi/makijaze-slubne",
    img: "/img/makijaze-slubne-mobile-salon.jpg",
    text: "Trwałe i piękne, delikatne lub wyraźne.",
  },
  {
    id: uuid(),
    title: "Fryzury okazyjne z dojazdem",
    url: "/uslugi/fryzury-okazyjne",
    img: "/img/fryzjerki-slubne-mobile-salon.jpg",
    text: "Trwałe i piękne, delikatne lub wyraźne.",
  },
  {
    id: uuid(),
    title: "Makijaże okazyjne z dojazdem",
    url: "/uslugi/makijaze-okazyjne",
    img: "/img/fryzjerki-slubne-mobile-salon.jpg",
    text: "Trwałe i piękne, delikatne lub wyraźne.",
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
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services",
    });
  }
};

exports.getService = (request, response, next) => {
  try {
    const { id } = request.params;
    const serviceToSend = servicesData.find((service) => service.id === id);

    if (!serviceToSend) {
      response.status(404).json({
        message: "Nie znaleziono usługi o podanym id",
      });

      return;
    }

    response.status(200).json({
      service: serviceToSend,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services/:id",
    });
  }
};

exports.servicesData = servicesData;
