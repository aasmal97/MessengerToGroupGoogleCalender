const express = require("express");
const dotenv = require("dotenv");
const { urlencoded, json } = require("body-parser");
const messengerResource = require("./routes/messenger");
const googleCalendarResource = require("./routes/googleCalender");
const { integrationResource } = require("./integrations");

const port = 5000;
const pathToEnv = "./.env";
const secrets = dotenv.config(pathToEnv);
const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/messenger", messengerResource);
app.use("/googleCalender", googleCalendarResource);
app.use("/integrations", integrationResource);
app.listen(port, () => {
  console.info("Express.js server app is now running locally on port: " + port);
});
