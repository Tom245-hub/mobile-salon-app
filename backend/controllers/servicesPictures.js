// const servicesPicturesData = [
//   {
//     idServicePicture: 1,
//     idStylist: 1,
//     idClient: 5,
//     img: "/img/stylist/warszawa/01-edyta/01-fryzura-01.jpg",
//     title: "Stylizacja włosów w loki",
//   },
//   {
//     img: "/img/stylist/warszawa/01-edyta/01-fryzura-02.jpg",
//     title: "Stylizacja włosów w loki",
//   },
//   {
//     img: "/img/stylist/warszawa/01-edyta/01-fryzura-03.jpg",
//     title: "Stylizacja włosów z upięciem",
//   },
//   {
//     img: "/img/stylist/warszawa/01-edyta/01-fryzura-04.jpg",
//     title: "Stylizacja włosów z upięciem",
//   },
//   {
//     img: "/img/stylist/warszawa/01-edyta/01-fryzura-05.jpg",
//     title: "Stylizacja włosów z upięciem i warkoczem",
//   },
//   {
//     img: "/img/stylist/warszawa/01-edyta/01-fryzura-06.jpg",
//     title: "Stylizacja włosów z upięciem i warkoczem",
//   },
//   {
//     img: "/img/stylist/warszawa/01-edyta/01-fryzura-07.jpg",
//     title: "Stylizacja włosów z warkoczem i lokami",
//   },
// ];

// exports.getServices = (request, response, next) => {
//   try {
//     response.status(200).json({
//       services: servicesData,
//     });
//   } catch (error) {
//     response.status(500).json({
//       error,
//       message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services",
//     });
//   }
// };

// exports.getService = (request, response, next) => {
//   try {
//     const { id } = request.params;
//     const serviceToSend = servicesData.find((service) => service.id === id);

//     if (!serviceToSend) {
//       response.status(404).json({
//         message: "Nie znaleziono usługi o podanym id",
//       });

//       return;
//     }

//     response.status(200).json({
//       service: serviceToSend,
//     });
//   } catch (error) {
//     response.status(500).json({
//       error,
//       message: "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /services/:id",
//     });
//   }
// };

// exports.servicesData = servicesData;
