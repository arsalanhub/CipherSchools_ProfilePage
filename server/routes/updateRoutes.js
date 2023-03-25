const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { undefinedChk } = require("../utils/routeHelper");

module.exports.details = async (req, res) => {
    const userId = req.body.userId;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const filePath = req?.file?.path;
    const image = filePath ? filePath.split("\\")[1] : null;

    const userData = await User.findById(userId);
    userData.first_name = first_name ? first_name : userData?.first_name;
    userData.last_name = last_name ? last_name : userData?.last_name;
    userData.email = email ? email : userData?.email;
    userData.phone = phone ? phone : userData?.phone;
    userData.image = image ? image : userData?.image;
    
    await userData.save();
    return res.json({ data: userData, msg: "Profile Updated" });
};

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
    interests = {
        appDev: undefinedChk(appDev, interests?.appDev),
        webDev: undefinedChk(webDev, interests?.webDev),
        gameDev: undefinedChk(gameDev, interests?.gameDev),
        dsa: undefinedChk(dsa, interests?.dsa),
        programming: undefinedChk(programming, interests?.programming),
        machineLearning: undefinedChk(machineLearning, interests?.machineLearning),
        dataScience: undefinedChk(dataScience, interests?.dataScience),
        others: undefinedChk(others, interests?.others)
    }
    let updatedData = await User.findByIdAndUpdate(userId, {
        interests
    }, { new: true });
    return res.status(200).json({ data: updatedData, msg: "Interest Updated" });
};

module.exports.web = async (req, res) => {
    const { userId, linkedIn, gitHub, twitter, instagram, facebook, website } = req.body;
    let userData = await User.findById(userId);
    let socials = userData.socials;
    socials = {
        linkedIn: undefinedChk(linkedIn, socials?.linkedIn),
        gitHub: undefinedChk(gitHub, socials?.gitHub),
        twitter: undefinedChk(twitter, socials?.twitter),
        instagram: undefinedChk(instagram, socials?.instagram),
        facebook: undefinedChk(facebook, socials?.facebook),
        website: undefinedChk(website, socials?.website),
    }
    let updatedData = await User.findByIdAndUpdate(userId, {
        socials
    }, { new: true });
    return res.status(200).json({ data: updatedData, msg: "Web Updated" });
};

module.exports.personalInfo = async (req, res) => {
    const { userId, highestEducation, currently } = req.body;
    let userData = await User.findById(userId);
    let professionalInfo = userData.professionalInfo;
    professionalInfo = {
        highestEducation: undefinedChk(highestEducation, professionalInfo?.highestEducation),
        currently: undefinedChk(currently, professionalInfo?.currently),
    }
    let updatedData = await User.findByIdAndUpdate(userId, {
        professionalInfo
    }, { new: true });
    return res.status(200).json({ data: updatedData, msg: "Professional Updated" });
};