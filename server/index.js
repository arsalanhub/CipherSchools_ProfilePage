require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, (req, res) => {
  console.log("Running on port 3000");
});
