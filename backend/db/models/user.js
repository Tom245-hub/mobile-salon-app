const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  accessLevel: { type: Number },
  login: { type: String },
  password: { type: String },
  userDataId: { type: mongoose.Schema.Types.ObjectId },
  // stylistData: {
  //   required: false,
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Stylist",
  // },

  // clientData: {
  //   required: false,
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Client",
  // },
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
