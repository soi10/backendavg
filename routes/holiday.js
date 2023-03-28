const express = require("express");
const holidayController = require("../controllers/holiday");
const router = express.Router();

router.post("/add", holidayController.addHoliday);
router.post("/get", holidayController.getHoliday);
router.post("/getone", holidayController.getOneHoliday);
router.post("/update", holidayController.updateHoliday);
router.post("/deleteone", holidayController.deleteHoliday);

module.exports = router;
