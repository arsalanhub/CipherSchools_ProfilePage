const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.details = (req, res) => {};

module.exports.about = async (req, res) => {
  const { userId, about_me } = req.body;
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

module.exports.password = async (req, res) => {
    const { userId, cur_password, new_password } = req.body;
    const userData = await User.findById(userId);
    let passwordChk = await bcrypt.compare(cur_password, userData.password);
    if(!passwordChk) return res.status(200).json({ data: [], msg: "Invalid Password" });
    let encryptedPassword = await bcrypt.hash(new_password, 10);
    let updatedData = await User.findByIdAndUpdate(userId, {
        password: encryptedPassword
    }, { new: true });
    return res.json({ data: updatedData, msg: "Password Updated" });
};

module.exports.interest = (req, res) => {};
