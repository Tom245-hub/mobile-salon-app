const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  accessLevel: { type: Number },
  login: { type: String },
  password: { type: String },
  user_id: { type: String },
  stylistData: {
    required: true,
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Stylist",
  },
  clientData: {
    required: true,
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Client",
  },
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
