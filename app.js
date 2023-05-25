const express = require("express");
const logger = require("morgan");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.get("/", (req, res) => {
  res.send("Hello Kirill and Sanya");
});
app.post("/cart", (req, res) => {
  res.send("Hello Kirill and Sanya");
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000");
});

module.exports = app;
