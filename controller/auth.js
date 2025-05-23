const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  auth: (req, res) => {
    const token = jwt.sign({ clientId: req.body.client_id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    console.log(token);
    res.status(200).json({
      success: true,
      access_token: token,
      type: "Bearer",
    });
  },
  
  refreshToken: (req, res) => {
    const token = jwt.sign({ clientId: req.body.client_id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(200).json({
      success: true,
      access_token: token,
      type: "Bearer",
    });
  },
};
