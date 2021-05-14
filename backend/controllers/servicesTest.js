const Service = require("../db/models/services");

exports.getServicesTest = async (req, res) => {
  try {
    const services = await Service.find({}).populate("category");
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /servicesTest",
    });
  }
};

// exports.getServiceTest = (request, response, next) => {
//   try {
//     const { id } = request.params;
//     const serviceToSend = servicesData.find((service) => service.idService === id);

//     if (!serviceToSend) {
//       response.status(404).json({
//         message: "Nie znaleziono katogorii usługi o podanym id",
//       });

//       return;
//     }

//     response.status(200).json({
//       idService: idServiceToSend,
//     });
//   } catch (error) {
//     response.status(500).json({
//       error,
//       message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services/:id",
//     });
//   }
// };

// exports.servicesData = servicesData;
