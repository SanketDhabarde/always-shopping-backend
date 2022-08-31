const jwt = require("jsonwebtoken");

const authVerify = (req, res, next) => {
  const encodedToken = req.headers.authorization;
  try {
    const decodedToken = jwt.verify(encodedToken, process.env.JWT_SECRET);
    req.user = { userId: decodedToken._id };
    return next();
  } catch (error) {
    console.error(error);
    res
      .status(401)
      .json({ error: "The token is invalid. Unauthorized access error." });
  }
};

module.exports = authVerify;
