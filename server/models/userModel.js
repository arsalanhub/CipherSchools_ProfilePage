const mongoose = require("mongoose");

const socialsSchema = mongoose.Schema({
  linkedIn: {
    type: String,
  },
  gitHub: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  website: {
    type: String,
  },
});

const professionalSchema = mongoose.Schema({
  highestEducation: {
    type: String,
  },
  currently: {
    type: String,
  },
});

const userSchema = mongoose.Schema({
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
    type: Array,
  },
});

module.exports = new mongoose.model("User", userSchema);
