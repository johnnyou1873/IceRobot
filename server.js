"use strict";

const express = require("express");
const config = require("./config.json");

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${config.host}:${config.port}`);
});