const core = require("@actions/core");
const pa11y = require("pa11y");

function runPa11y(port) {
  const url = `http://localhost:${port}`;
  pa11y(url)
    .then((data) => {
      core.debug(data);
      console.log(data);
    })
    .catch((error) => core.error(`Error: ${error}`));
}

try {
  const port = core.getInput("port") || 3000;
  console.log(`Hello Joaquin your port is: ${port}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);

  console.log("Running Pa11y...");
  runPa11y(port);
  console.log("Pa11y completed successfully.");
} catch (error) {
  core.setFailed(error.message);
}
