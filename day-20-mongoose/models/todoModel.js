const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      //   type: Number,
      //   trim: true,
      //   lowercase: true,
      //   uppercase: true,
      //   minLength: 5,
      //   maxLength: 100,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      //   default: true,
      required: [true, "This isCompleted is required by the DB"],
    },
  },
  {
    timestamps: true,
    // strict: false,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
