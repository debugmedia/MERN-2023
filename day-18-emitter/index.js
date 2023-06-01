const express = require("express");
const app = express();
const cors = require("cors");
const todoRoute = require("./routes/todo");
// const errorHandle = require("./middlewares/errorHandle");

app.use(cors());
app.use(express.json());
// app.use("/cdn/img", express.static("public/images"));
// app.use(express.static("public/images"));
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("Middleware INDEX.JS");
  next();
});

app.use("/api/todo", todoRoute);
app.use("/api/profile", require("./routes/profile"));

app.use("*", (req, res) => {
  res.status(404).json({
    message: "This Route does not exist",
  });
});

// TODO: Advance Error Handling
// app.use(errorHandle);

const PORT = 3006;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
