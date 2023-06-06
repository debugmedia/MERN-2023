const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect("mongodb://localhost:27017/movieapp");
    console.log("Database Connected: " + connection.host);
    // mongoose.set("debug", true);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
