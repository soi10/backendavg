const express = require("express")

const DataDetail = require("../controllers/data_detail")

const routerData = express.Router();

routerData.post("/add",DataDetail.addDataDetail)
routerData.get("/databypeacode",DataDetail.getListByPeaCode)

module.exports = routerData;