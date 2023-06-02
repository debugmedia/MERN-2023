const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      const { connection } = await mongoose.connect(process.env.MONGO_URI);
      //  await mongoose.connection.db.dropCollection("todos");
      console.log("Database Connected: " + connection.host);
   } catch (error) {
      console.log(error);
   }
};

module.exports = connectDB;
