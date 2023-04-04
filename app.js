const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const searchDayRoutes = require("./routes/searchDay");
const holidayRoutes = require("./routes/holiday");
const routesUploadExcel = require("./routes/office_routes")
const login_idm = require("./routes/login_routes")
const routesUploadExcelRate = require("./routes/rate_routes")
const app = express();

app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/day", searchDayRoutes);
app.use("/holiday", holidayRoutes);
app.use('/uploads',routesUploadExcel)
app.use('/login',login_idm)
app.use('/uploadrate',routesUploadExcelRate)
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(process.env.MONGODB)
  .then((result) => {
    app.listen(process.env.PORT);
    console.log("server started port: " + process.env.PORT);
  })
  .catch((err) => console.log(err));
