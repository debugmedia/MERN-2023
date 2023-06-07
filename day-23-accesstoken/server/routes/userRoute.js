const express = require("express");
const {
  login,
  signup,
  profile,
  refreshToken,
  logout,
} = require("../controllers/userController");
const { checkAuth } = require("../middleware/checkAuth");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/profile", checkAuth, profile);
router.get("/refresh-token", refreshToken);
router.get("/logout", logout);

module.exports = router;
