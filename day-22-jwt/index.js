const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");

require("dotenv").config();
connectDb();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRoute);

const port = 3003;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
