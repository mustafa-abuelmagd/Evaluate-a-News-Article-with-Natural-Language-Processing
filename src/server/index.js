// import 'path'
// import 'express'
// import 'body-parser'
// import 'node-fetch'
// import './mockAPI'
// import 'cors'

// TODO: Configure the environment variables
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const mockAPIRes = require("./mockAPI");
const cors = require("cors");

const PORT = 8081;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));

// console.log("came heeeeeeeeeeeeerrrrrrrrrrrrrreeeeeeeeeeeeeeeeee");

const urlPrefix = "https://api.meaningcloud.com/sentiment-2.1?";
const key = "029278253325f96b521013aa04847ed6";

let input = "";

// app.get("/", (req, res) => {
//   console.log("tttttttttttt", req);
//   res.send("dist/index.html");
// });

// app.get("/test", (req, res) => {
// //   console.log("wwwwwwwwww", req.body);

//   res.send(mockAPIRes);
// });

app.post("/api", async (req, res) => {

  input = req.body.url;

  const sentURL = `${urlPrefix}key=${key}&&url=${input}&&lang=en`;

  console.log("sentURL", sentURL);

  const response = await fetch(sentURL);

  const DataReceived = await response.json();
  console.log(
    "DataReceived",
    DataReceived["model"],
    DataReceived["score_tag"],
    DataReceived["agreement"],
    DataReceived["subjectivity"],
    DataReceived["confidence"],
    DataReceived["irony"],

  );

  res.send(DataReceived);
});


app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Listening on port ${PORT}`);
});

