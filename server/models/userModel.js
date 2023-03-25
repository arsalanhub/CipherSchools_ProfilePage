const mongoose = require("mongoose");

const socialsSchema = new mongoose.Schema({
  linkedIn: {
    type: String,
    default: ""
  },
  gitHub: {
    type: String,
    default: ""
  },
  twitter: {
    type: String,
    default: ""
  },
  instagram: {
    type: String,
    default: ""
  },
  facebook: {
    type: String,
    default: ""
  },
  website: {
    type: String,
    default: ""
  },
});

const professionalSchema = new mongoose.Schema({
  highestEducation: {
    type: String,
  },
  currently: {
    type: String,
  },
});

const interestsSchema = new mongoose.Schema({
    appDev: {
        type: Boolean,
        default: false
    },
    webDev: {
        type: Boolean,
        default: false
    },
    gameDev: {
        type: Boolean,
        default: false
    },
    dsa: {
        type: Boolean,
        default: false
    },
    programming: {
        type: Boolean,
        default: false
    },
    machineLearning: {
        type: Boolean,
        default: false

    },
    dataScience: {
        type: Boolean
    },
    others: {
        type: Boolean
    }
})

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  about_me: {
    type: String,
  },
  socials: {
    type: socialsSchema,
  },
  professionalInfo: {
    type: professionalSchema,
  },
  followers: {
    type: Array,
  },
  interests: {
    type: interestsSchema,
  },
});

module.exports = mongoose.model("User", userSchema);
