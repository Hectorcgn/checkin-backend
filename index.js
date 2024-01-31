//Imports
import "dotenv/config";
import express from "express";
import multer from "multer";
import cors from "cors";
import { sendMail } from "./contoller/sendMail.js";
import { sendMail2 } from "./contoller/sendmail.js";

//Variable
const { PORT } = process.env || 3000;
const app = express();
let user = [];
const startTimeObject = {
  startTime: [],
};
const endTimeObject = {
  endTime: [],
};

//multer
const upload = multer();

app.use(cors());
app.use(express.json());

//get-Routes
app.get("/api/startTime", (_, res) => {
  res.status(200).send(startTimeObject.startTime);
});

app.get("/api/endTime", (_, res) => {
  res.status(200).send(endTimeObject.endTime);
});

//post-Routes
app.post("/api/login", upload.none(), async (req, res) => {
  const { username } = req.body;
  user.push(username);

  console.log(username);
  res.status(200).send("Logged in");
});

app.post("/api/startTime", async (req, res) => {
  const { startTime } = req.body;
  if (startTime) {
    console.log(startTime);
    startTimeObject.startTime.push(startTime + "\n");
    res.status(200).send("Start time recorded");
    sendMail(user, startTime);
  } else {
    console.error("Starttime geht nicht.");
    res.status(400).send("Start time not recorded");
  }
});

app.post("/api/endTime", async (req, res) => {
  const { endTime } = req.body;
  if (endTime) {
    console.log(endTime);
    endTimeObject.endTime.push(endTime + "\n");
    res.status(200).send("Stop time recorded");
    sendMail2(user, endTime);
  } else {
    console.error("Stoptime geht nicht.");
    res.status(400).send("Stop time not recorded");
  }
});
//server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
