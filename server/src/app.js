const express = require("express");
const planetRouter = require("./routes/planets/planets.route");
const cors = require("cors");
const path = require("path");
const morgon = require("morgan");
const launchesRouter = require("./routes/launches/launches.router");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgon("combined"));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(planetRouter);
app.use("/launches", launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
