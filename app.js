"use strict";

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const server = http.createServer(app);

server.listen(port, hostname, function () {
  console.log(`server is running at http://${hostname}:${port}`);
});

const rootController = require("./routes/index");
const locationsController = require("./routes/location");
app.use("/", rootController);
app.use("/location", locationsController);
