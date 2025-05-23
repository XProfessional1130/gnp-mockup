const express = require("express");
const router = express.Router();
const applicationController = require("../controller/application");

router.get("/", applicationController.getApplication);
router.get("/:id", applicationController.getApplicationById);
router.post("/", applicationController.createApplication);
router.patch("/:id", applicationController.updateApplication);

module.exports = router;
