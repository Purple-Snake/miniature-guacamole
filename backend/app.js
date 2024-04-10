const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      credentials: true,
    })
  );

// Routers
app.use("/items", require("./routes/ItemsRoute"));

module.exports = app;