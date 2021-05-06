const { servicesData } = require("./services");

const getServices = (array) => {
  let services = [];
  for (let i = 0; i <= array.length; i++) {
    services.push(servicesData.filter((service) => service.idService === array[i]));
  }
  return services;
};

const ordersData = [
  {
    idOrder: 1,
    idStylist: 1,
    idClient: 1,
    status: "nowe",
    date: "12 październik 2021",
    time: "9:00",
    adress: {
      street: "Marszłkowska",
      buildNumber: "5a",
      localNumber: "77",
      floor: "4",
      zipcode: "01-300",
      city: "Warszawa",
    },
    services: getServices([1, 2]),
  },
  {
    idOrder: 2,
    idStylist: 1,
    idClient: 2,
    status: "nowe",
    date: "30 wrzesień 2021",
    time: "12:00",
    adressDelivery: {
      street: "Brazylijska",
      buildNumber: "12",
      localNumber: "104",
      floor: "9",
      zipcode: "03-322",
      city: "Warszawa",
    },
    services: getServices([3, 3, 5]),
  },
];

exports.getOrders = (request, response, next) => {
  try {
    response.status(200).json({
      orders: ordersData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /orders",
    });
  }
};

exports.getOrder = (request, response, next) => {
  try {
    const { id } = request.params;
    const orderToSend = ordersData.find((order) => order.id === id);

    if (!orderToSend) {
      response.status(404).json({
        message: "Nie znaleziono zamówienia o podanym id",
      });

      return;
    }

    response.status(200).json({
      order: orderToSend,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /orders/:id",
    });
  }
};

exports.postOrder = (request, response, next) => {
  try {
    const { firstName, lastName, email, phone } = request.body;
    if (!firstName || !lastName || !email || !phone) {
      response.status(400).json({
        message: "Nie podano wszystkich wymaganych informacji",
      });

      return;
    }

    // const isStylistExist = stylistsData.some(
    //   ({ title: currentTitle }) => currentTitle === title
    // );
    // if (isStylistExist) {
    //   response.status(409).json({
    //     message: `Istnieje już w bazie stylistka ${title}`,
    //   });

    //   return;
    // }

    const newOrder = {
      // id: uuid(),
      firstName,
      lastName,
      email,
      phone,
    };

    ordersData.push(newOrder);

    response.status(201).json({
      orders: ordersData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /orders",
    });
  }
};

exports.ordersData = ordersData;
