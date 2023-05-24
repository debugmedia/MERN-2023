const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where you want to store uploaded files
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    // Generate a unique name for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.json({
    message: "public/images/upload_file-1684947767660-562795251.jpg",
  });
});

router.post("/upload", upload.single("upload_file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.json({
    message: "Image Uploaded!",
  });
});

module.exports = router;
