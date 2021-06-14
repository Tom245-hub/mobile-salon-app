const mongoose = require("mongoose");

const StylistSchema = new mongoose.Schema({
  personalData: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    birthYear: { type: Number },
    zipcode: { type: String },
    address: {
      city: { type: String },
      zipcode: { type: String },
      street: { type: String },
      numberBuild: { type: String },
      numberLocal: { type: String },
      company: { type: String },
      NIP: { type: String },
    },
  },
  profileData: {
    title: { type: String },
    url: { type: String },
    img: { type: String },
    text: { type: String },
    hairStylExp: { type: Number },
    makeupStylExp: { type: Number },
    city: { type: String },
    position: {
      hairStylist: { type: Boolean },
      makeupStylist: { type: Boolean },
    },
  },
  portfolio: {
    required: true,
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Picture",
  },
  reviews: {
    required: true,
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Review",
  },
});

const Stylist = mongoose.model("Stylist", StylistSchema);

module.exports = Stylist;
