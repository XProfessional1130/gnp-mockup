const express = require("express");
const router = express.Router();
const applicationOwnerController = require("../controller/applicationOwner");

router.get("/", applicationOwnerController.getApplicationOwner);
router.get("/:id", applicationOwnerController.getApplicationOwnerById);
router.post("/", applicationOwnerController.createApplicationOwner);
router.patch("/:id", applicationOwnerController.updateApplicationOwner);

module.exports = router;
