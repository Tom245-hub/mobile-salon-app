const mongoose = require("mongoose");

const StylistSchema = new mongoose.Schema({
  personalData: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: Number },
    birthYear: { type: Number },
    zipcode: { type: String },
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
  portfolio: {
    required: true,
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Picture",
  },
});

const Stylist = mongoose.model("Stylist", StylistSchema);

module.exports = Stylist;
