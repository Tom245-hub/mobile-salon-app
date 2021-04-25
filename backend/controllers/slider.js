const { v4: uuid } = require("uuid");

const sliderData = [
  {
    id: uuid(),
    title: "Trendy fryzur ślubnych 2021",
    url: "/uslugi/fryzury-slubne",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Upięcia, koki z welonem, warkocze, ozdoby.",
  },
  {
    id: uuid(),
    title: "Sprawdź swoją stylistkę i zamów spotkanie próbne",
    url: "/uslugi/makijaze-slubne",
    img: "/img/makijaze-slubne-mobile-salon.jpg",
    text: "Trwałe i piękne, delikatne lub wyraźne.",
  },
  {
    id: uuid(),
    title: "Standardy naszych usług",
    url: "/uslugi/fryzury-okazyjne",
    img: "/img/fryzjerki-slubne-mobile-salon.jpg",
    text: "Trwałe i piękne, delikatne lub wyraźne.",
  },
];

exports.getSlider = (request, response, next) => {
  try {
    response.status(200).json({
      slider: sliderData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /slider",
    });
  }
};

exports.sliderData = sliderData;
