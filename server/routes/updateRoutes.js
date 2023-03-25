const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { undefinedChk } = require("../utils/routeHelper");

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

module.exports.interest = async (req, res) => {
    const { userId, appDev, webDev, gameDev, dsa, programming, machineLearning, dataScience, others } = req.body;
    let userData = await User.findById(userId);
    let interests = userData.interests;
    interests.appDev = undefinedChk(appDev, interests.appDev);
    interests.webDev = undefinedChk(webDev, interests.webDev);
    interests.gameDev = undefinedChk(gameDev, interests.gameDev);
    interests.dsa = undefinedChk(dsa, interests.dsa);
    interests.programming = undefinedChk(programming, interests.programming);
    interests.machineLearning = undefinedChk(machineLearning, interests.machineLearning);
    interests.dataScience = undefinedChk(dataScience, interests.dataScience);
    interests.others = undefinedChk(others, interests.others);
    let updatedData = await User.findByIdAndUpdate(userId, {
        interests
    }, { new: true });
    return res.status(200).json({ data: updatedData, msg: "Interest Updated" });
};
