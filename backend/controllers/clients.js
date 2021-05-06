const { ordersData } = require("./orders");

const getOrders = (idClient) => {
  return ordersData.filter((order) => order.idClient === idClient);
};

const clientsData = [
  {
    idClient: 1,
    firstName: "Anna",
    secondName: "Kowalska",
    adressInvoice: {
      street: "Szeligowska",
      buildNumber: "3a",
      localNumber: "33",
      zipcode: "01-320",
      city: "Warszawa",
      company: "Felix Company",
      NIP: "233-444-21-23",
    },
    orders: getOrders(1),
  },
];

exports.getClients = (request, response, next) => {
  try {
    response.status(200).json({
      clients: clientsData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /stylists",
    });
  }
};

exports.getClient = (request, response, next) => {
  try {
    const { id } = request.params;
    const clientToSend = clientsData.find((client) => client.idClient == id);

    if (!clientToSend) {
      response.status(404).json({
        message: "Nie znaleziono klienta o podanym id",
      });

      return;
    }

    response.status(200).json({
      client: clientToSend,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /clients/:id",
    });
  }
};

exports.clientsData = clientsData;
