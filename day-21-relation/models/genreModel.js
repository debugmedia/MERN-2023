const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxLength: 2,
    maxLength: 255,
    required: true,
  },
});

module.exports = mongoose.model("Genres", genreSchema);
