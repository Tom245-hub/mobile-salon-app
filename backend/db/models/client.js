const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  personalData: {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: Number },
    email: { type: String },
    address: {
      city: { type: String },
      zipcode: { type: String },
      street: { type: String },
      numberBuild: { type: String },
      numberLocal: { type: String },
    },
    company: {
      name: { type: String },
      NIP: { type: String },
      city: { type: String },
      zipcode: { type: String },
      street: { type: String },
      numberBuild: { type: String },
      numberLocal: { type: String },
    },
  },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
