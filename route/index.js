const express = require("express");
const router = express.Router();
const auth = require("./auth");
const applicationOwner = require("./applicationOwner");
const application = require("./application");
const { checkAuth } = require("../middleware/checkAuth");

router.use("/realms/api-consumer/protocol/openid-connect/token", auth);
router.use("/v2/operate/applicationOwner", checkAuth, applicationOwner);
router.use("/v2/operate/application", checkAuth, application);

module.exports = router;
