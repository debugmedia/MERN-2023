const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.ACCESS_TOKEN_SECRET);
};

module.exports = { generateAccessToken };
