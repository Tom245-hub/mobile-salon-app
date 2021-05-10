const { db } = require("../db/models/client");
const Client = require("../db/models/client");

exports.getClientsTest = async (req, res) => {
  try {
    const clients = await Client.find({});
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w API clientsTest",
    });
  }
};

exports.getClientTest = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await Client.findOne({ _id: id });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Błąd w API clientTest",
    });
  }
};
