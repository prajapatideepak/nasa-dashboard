const express = require("express");
const { httpGetAllplanets } = require("./planet.controller");
const planetRouter = express.Router();

planetRouter.get("/planets", httpGetAllplanets);
module.exports = planetRouter;
