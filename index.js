const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const { initializeDbConnection } = require("./db/db.connect");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

initializeDbConnection();

app.use(bodyParser.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
