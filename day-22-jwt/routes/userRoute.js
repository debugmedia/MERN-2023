const express = require("express");
const { login, signup, profile } = require("../controllers/userController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

router.get("/profile", profile);

module.exports = router;
