const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
const todoRoute = require("./routes/todo");

require("dotenv").config();

app.use(cors());
app.use(express.json());

connectDb();

app.use("/api/todo", todoRoute);

app.all("*", (req, res) => {
  res.status(404).json("This page does not exist");
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
