const categoriesData = [
  {
    idCategory: 1,
    title: "Fryzury ślubne z dojazdem",
    url: "/uslugi/fryzury-slubne",
    img: "/img/fryzury-slubne-mobile-salon.jpg",
    text: "Upięcia, koki z welonem, warkocze, ozdoby.",
  },
  {
    idCategory: 2,
    title: "Makijaże ślubne z dojazdem",
    url: "/uslugi/makijaze-slubne",
    img: "/img/makijaze-slubne-mobile-salon.jpg",
    text: "Trwałe i piękne, delikatne lub wyraźne.",
  },
  {
    idCategory: 3,
    title: "Fryzury okazyjne z dojazdem",
    url: "/uslugi/fryzury-okazyjne",
    img: "/img/fryzjerki-slubne-mobile-salon.jpg",
    text: "Trwałe i piękne, delikatne lub wyraźne.",
  },
  {
    idCategory: 4,
    title: "Makijaże okazyjne z dojazdem",
    url: "/uslugi/makijaze-okazyjne",
    img: "/img/fryzjerki-slubne-mobile-salon.jpg",
    text: "Trwałe i piękne, delikatne lub wyraźne.",
  },
];

exports.getCategories = (request, response, next) => {
  try {
    response.status(200).json({
      categories: categoriesData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /categories",
    });
  }
};

exports.categoriesData = categoriesData;
