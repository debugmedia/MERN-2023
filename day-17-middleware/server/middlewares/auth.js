const checkAuth = (req, res, next) => {
  const { auth } = req.body;

  if (!auth) {
    return res.status(401).json({
      message: "UnAuthorized",
    });
  }

  console.log("Inside Middleware");
  next();
};

module.exports = { checkAuth };
