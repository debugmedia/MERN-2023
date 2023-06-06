const { Users } = require("../models/userModel");
const {
  generatePasswordHash,
  comparePasswordHash,
} = require("../utils/bcrypt");
const { generateAccessToken } = require("../utils/jwt");

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

  res.json({ _id: user.id, username: user.username, accessToken });
};

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

const profile = async (req, res) => {
  const user = await Users.findById(req.userId);
  res.json(user);
};

module.exports = { login, signup, profile };
