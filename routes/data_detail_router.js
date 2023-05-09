const express = require("express")

const DataDetail = require("../controllers/data_detail")

const routerData = express.Router();

routerData.post("/add",DataDetail.addDataDetail)

module.exports = routerData;