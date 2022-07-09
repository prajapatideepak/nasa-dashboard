const PORT = process.env.PORT || 8000;

const http = require("http");
const app = require("./app");
const { loadHabiPlanets } = require("./models/planet.model");

const server = http.createServer(app);

async function startServer() {
  await loadHabiPlanets();

  server.listen(PORT, () => {
    console.log("Server is Listing in ", PORT);
  });
}

startServer();
