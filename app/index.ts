import dotenv from "dotenv";
import express from "express";
import { urlencoded, json } from "body-parser";
import googleCalenderResource from "./routes/googleCalender";
import facebookResource from "./routes/facebookGroups";

const port = 5000;
const pathToEnv = "./.env";
const secrets = dotenv.config({
  path: pathToEnv,
});
const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/facebookGroups", facebookResource);
app.use("/googleCalender", googleCalenderResource);
//app.use("/integrations", integrationResource);
app.listen(port, () => {
  console.info("Express.js server app is now running locally on port: " + port);
});
