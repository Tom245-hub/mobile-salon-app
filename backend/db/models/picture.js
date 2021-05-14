const mongoose = require("mongoose");

const PictureSchema = new mongoose.Schema({
    img: { type: String },
    title: { type: String },
});

const Picture = mongoose.model("Picture", PictureSchema);

module.exports = Picture;
