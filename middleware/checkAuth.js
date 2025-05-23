const jwt = require("jsonwebtoken");

module.exports = {
  checkAuth: (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }
      req.client = decoded;
      next();
    });
  },
};
