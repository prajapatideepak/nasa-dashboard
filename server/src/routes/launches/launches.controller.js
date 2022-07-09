const {
  getAllLaunches,
  addnewLanches,
  launchExitsById,
  abortedLauch,
} = require("../../models/launches.models");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddLaunch(req, res) {
  let launch = req.body;

  if (
    !launch.mission ||
    !launch.launchDate ||
    !launch.rocket ||
    !launch.target
  ) {
    return res.status(400).json({
      message: "Missing Lauch Property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      message: "Invalid Date",
    });
  }
  addnewLanches(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  launchId = Number(req.params.id);
  if (!launchExitsById(launchId)) {
    return res.status(404).json({
      message: "Launch Not Found",
    });
  }

  const aborted = abortedLauch(launchId);

  return res.status(200).json(aborted);
}

module.exports = {
  httpGetAllLaunches,
  httpAddLaunch,
  httpAbortLaunch,
};
