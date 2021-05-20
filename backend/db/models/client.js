const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  firstName: { type: String },
  secondName: { type: String },
  phone: { type: Number },
  email: { type: String },
  adressInvoice: {
    street: { type: String },
    buildNumber: { type: String },
    localNumber: { type: String },
    zipcode: { type: String },
    city: { type: String },
    company: { type: String },
    NIP: { type: String },
  },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
