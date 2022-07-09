const { getAllplanets } = require("../../models/planet.model");

function httpGetAllplanets(req, res) {
  return res.status(200).json(getAllplanets());
}

module.exports = {
  httpGetAllplanets,
};
