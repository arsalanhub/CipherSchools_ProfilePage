require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const { loginRoute, signupRoute } = require("./routes/authentication");
const { details, about, web, personalInfo, password, interest } = require("./routes/updateRoutes");
const { profileUpload } = require("./utils/multerConfig");
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

app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.use("/updateUser/details", profileUpload.single("profile"), details);
app.use("/updateUser/about", about);
app.use("/updateUser/web", web);
app.use("/updateUser/personalInfo", personalInfo);
app.use("/updateUser/password", password);
app.use("/updateUser/interest", interest);

app.listen(3000, (req, res) => {
  console.log("Running on port 3000");
});
