const bcrypt = require("bcrypt");

const SALT = 10;

const generatePasswordHash = (password) => {
  return bcrypt.hash(password, SALT);
};

const comparePasswordHash = (password, passwordHash) => {
  return bcrypt.compare(password, passwordHash);
};

module.exports = {
  generatePasswordHash,
  comparePasswordHash,
};
