const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.post("/add", adminController.addAdmin);
router.post("/get", adminController.getAdmin);

module.exports = router;
