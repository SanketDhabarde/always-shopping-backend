const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const { initializeDbConnection } = require("./db/db.connect");

initializeDbConnection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
