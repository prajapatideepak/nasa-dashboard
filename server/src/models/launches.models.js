const launches = new Map();
let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "kepler explorion x ",
  rocket: "Expolerr 101",
  launchDate: new Date("December 27,2030"),
  target: "kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function launchExitsById(lauchId) {
  return launches.has(lauchId);
}

function abortedLauch(lauchId) {
  const aborted = launches.get(lauchId);
  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
}

function addnewLanches(launch) {
  latestFlightNumber++;

  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      success: true,
      upcoming: true,
      customers: ["Deepak", "NASA"],
    })
  );
}

module.exports = {
  getAllLaunches,
  launchExitsById,
  addnewLanches,
  abortedLauch,
};
