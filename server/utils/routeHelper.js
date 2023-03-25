module.exports.undefinedChk = (data, origValue) => {
  if (data === true) return true;
  else if (data === false) return false;
  else if (data!==undefined || data === "") return data;
  return origValue;
};

module.exports.socialsDefault = {
  linkedIn: "",
  gitHub: "",
  twitter: "",
  instagram: "",
  facebook: "",
  website: "",
};

module.exports.professionalDefault = {
  highestEducation: "Higher Secondary",
  currently: "College Student",
};

module.exports.interestsDefaut = {
  appDev: false,
  webDev: false,
  gameDev: false,
  dsa: false,
  programming: false,
  machineLearning: false,
  dataScience: false,
  others: false,
};
