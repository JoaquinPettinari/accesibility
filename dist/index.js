const core = require("@actions/core");
const pa11y = require("pa11y");

async function runPa11y() {
  try {
    const browser = await puppeteer.launch({
      ignoreHTTPSErrors: true,
    });

    const results = await pa11y(url, {
      browser: browser,
    });
    console.log(results);
    browser.close();
  } catch (error) {
    core.setFailed(error);
  }
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
