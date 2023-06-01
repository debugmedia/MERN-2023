const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const emitter = require("../event");

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

emitter.on("read-file", (data) => {
   console.log(data);
});

router.get("/", (req, res) => {
   emitter.emit("read-file", "File being read");
   const data = fs.readdirSync("public/images");
   //  console.log(data);
   res.json({
      message: "",
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
