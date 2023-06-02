const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
require("express-async-errors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/todo", require("./routes/todo"));

app.all("*", (req, res) => {
   res.status(404).json("This page does not exist");
});

app.use((err, req, res, next) => {
   // Handle specific error types
   res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
