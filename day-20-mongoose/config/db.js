const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected: " + connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
