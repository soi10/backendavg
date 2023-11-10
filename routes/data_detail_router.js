const express = require("express");

const DataDetail = require("../controllers/data_detail");

const routerData = express.Router();

routerData.post("/add", DataDetail.addDataDetail);
routerData.get("/databypeacode", DataDetail.getListByPeaCode);
routerData.get("/id", DataDetail.getById);
routerData.delete("/delete", DataDetail.DeleteId);
routerData.put("/update", DataDetail.updateById);
routerData.post("/all", DataDetail.getAll);
routerData.post("/count", DataDetail.countDetail);

module.exports = routerData;
