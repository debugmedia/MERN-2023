const { Users } = require("../models/userModel");
const { generatePasswordHash, comparePasswordHash } = require("../utils/bcrypt");
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require("../utils/jwt");

const signup = async (req, res) => {
   try {
      const { username, password } = req.body;
      // Check if user exist in the DB
      const isExist = await Users.findOne({ username });
      if (isExist) {
         return res.status(400).json({
            message: "User Already Exist",
         });
      }
      // Create new user
      const hashedPassword = await generatePasswordHash(password);
      await Users.create({ username, password: hashedPassword });

      res.json({
         message: "Account has been Created",
      });
   } catch (error) {
      res.json({
         message: error.message,
      });
   }
};

const login = async (req, res) => {
   const { username, password } = req.body;
   const user = await Users.findOne({ username });

   if (!user) {
      return res.status(404).json({
         message: "Username is not valid",
      });
   }

   const validPassword = await comparePasswordHash(password, user.password);

   if (!validPassword) {
      return res.status(404).json({
         message: "Password is not valid",
      });
   }

   const accessToken = generateAccessToken(user._id);
   const refreshToken = generateRefreshToken(user._id);

   res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
   });

   res.json({ _id: user.id, username: user.username, accessToken });
};

const profile = async (req, res) => {
   const user = await Users.findById(req.userId).select("-password");
   res.json(user);
};

const refreshToken = async (req, res) => {
   const userId = verifyRefreshToken(req.cookies.refreshToken);

   if (!userId) {
      return res.status(401).json({ message: "Refresh Token is expired" });
   }

   const accessToken = generateAccessToken(userId);
   const refreshToken = generateRefreshToken(userId);

   res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
   });
   res.json({ accessToken });
};

const logout = async (req, res) => {
   res.clearCookie("refreshToken");
   res.json({ message: "Logged Out" });
};

module.exports = { login, signup, profile, refreshToken, logout };
