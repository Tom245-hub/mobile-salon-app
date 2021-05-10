const mongoose = require("mongoose");

const PictureSchema = new mongoose.Schema({
  picture: {
    img: { type: String },
    title: { type: String },
    // stylist: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "Stylist",
    //   required: true,
    // },
  },
});

const Picture = mongoose.model("Picture", PictureSchema);

module.exports = Picture;
