const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5s",
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1y",
  });
};

const verifyRefreshToken = (refreshToken) => {
  if (!refreshToken) return false;

  const tokenValid = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

  if (!tokenValid) return false;

  return tokenValid._id;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
};
