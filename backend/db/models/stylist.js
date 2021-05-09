const mongoose = require("mongoose");

const StylistSchema = new mongoose.Schema({
  personalData: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: Number },
    birthYear: { type: Number },
    zipcode: { type: Number },
  },
  profileData: {
    title: { type: String },
    url: { type: String },
    img: { type: String },
    text: { type: String },
    position: {
      hairStylist: { type: Boolean },
      makeupStylist: { type: Boolean },
    },
    hairStylExp: { type: Number },
    makeupStylExp: { type: Number },
    city: { type: String },
  },
});

const Stylist = mongoose.model("Stylist", StylistSchema);

module.exports = Stylist;
