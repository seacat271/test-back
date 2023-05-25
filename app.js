const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Kirill and Sanya");
});
app.post("/cart", (req, res) => {
  const { name, email, phone, address } = req.body;
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000");
});

module.exports = app;
