const User = require("../models/userModel");

module.exports.details = (req, res) => {};

module.exports.about = async (req, res) => {
  const { userId, about_me } = req.body;
  console.log(userId, about_me)
  let updatedData = await User.findByIdAndUpdate(
    userId,
    {
      about_me,
    },
    { new: true }
  );
  return res.status(200).json({ data: updatedData, msg: "Data Updated" });
};

module.exports.web = (req, res) => {};

module.exports.personalInfo = (req, res) => {};

module.exports.password = (req, res) => {};

module.exports.interest = (req, res) => {};
