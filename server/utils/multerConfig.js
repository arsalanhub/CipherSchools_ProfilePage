const multer = require("multer");
const path = require("path");

const profileStorage = multer.diskStorage({
  // Destination to store image
  destination: "profile",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

module.exports.profileUpload = multer({
  storage: profileStorage,
  limits: {
    fileSize: 100000000,
  },
  fileFilter(req, file, cb) {
    cb(undefined, true);
  },
});