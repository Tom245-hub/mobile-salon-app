export const showAvailableCities = (data) => {
  let cities = [];

  data.map((item) => !cities.includes(item.city) && cities.push(item.city));

  return cities;
};

export const showAvailableServices = (data) => {
  let avilableServices = [];

  data.map((item) => Object.keys(item.services).map((service) => !avilableServices.includes(service) && avilableServices.push(service)));

  return avilableServices;
};
