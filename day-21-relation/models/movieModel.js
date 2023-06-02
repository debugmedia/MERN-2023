const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: 2,
      maxLength: 255,
      required: true,
    },

    ratings: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },

    genre: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genres",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movies", movieSchema);
