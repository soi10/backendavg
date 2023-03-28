const express = require("express");
const searchController = require("../controllers/searchDay");
const router = express.Router();

router.post("/calculate-days", searchController.calculateDays);

module.exports = router;
