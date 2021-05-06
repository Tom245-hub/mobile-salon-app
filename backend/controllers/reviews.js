const reviewsData = [
  {
    idOrder: 1,
    idStylist: 1,
    idClient: 1,
    comment: "Piękna fryzura śluba w wykonaniu Edyty. Dziękuję.",
    stars: 5,
  },
  {
    idOrder: 2,
    idStylist: 1,
    idClient: 2,
    comment: "Polecam makijaże Pani Edyty i Mobile Salon!",
    stars: 4,
  },
  {
    idOrder: 3,
    idStylist: 1,
    idClient: 3,
    comment: "Polecam makijaże Pani Edyty i Mobile Salon!",
    stars: 5,
  },
];

exports.getReviews = (request, response, next) => {
  try {
    response.status(200).json({
      reviews: reviewsData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /reviews",
    });
  }
};

exports.reviewsData = reviewsData;
