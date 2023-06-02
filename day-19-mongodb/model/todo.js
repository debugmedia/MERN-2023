const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
   {
      todo: {
         type: String,
         unique: true,
         // uppercase: false,
         // lowercase: true,
         // trim: true,
         // minLength: 10,
         // maxLength: [20, "Max allowed length is 20"],
         // validate: {
         //    validator: (value) => {
         //       return value.length > 10;
         //    },
         //    message: "This is wronggg",
         // },

         required: true,
      },

      isCompleted: {
         type: Boolean,
         default: false,
      },
      // isCompleted: {
      //    type: Boolean,
      //    required: function () {
      //       return this.todo.length > 10;
      //    },
      // },
      movie: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movies",
         },
      ],
      cow: [],
   },
   { timestamps: true }
   // strict: false
);

module.exports = mongoose.model("Users", todoSchema);
