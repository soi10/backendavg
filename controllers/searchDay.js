// const Node = require("../models/node");
// const mongoose = require("mongoose");
const moment = require("moment");
const Holiday = require("../models/holiday");

async function countWorkingDays(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);
  let count = 0;

  const holidays = await Holiday.find()
    .lean()
    .then((docs) => {
      return docs.map((doc) => doc.dateHoliday);
    })
    .catch((err) => {
      console.log(err);
      return [];
    });

  const diff = end.diff(start, "days"); // calculate the difference between start and end dates

  for (let i = 0; i <= diff; i++) {
    const date = moment(startDate).add(i, "days");

    if (
      !holidays.includes(date.format("YYYY-MM-DD")) &&
      date.isoWeekday() !== 6 &&
      date.isoWeekday() !== 7
    ) {
      count++; // increment count if the day is not a holiday and not a weekend
    }
  }

  return count;
}

async function countWorkingDaysNor(startDateNor, endDateNor) {
  const start = moment(startDateNor);
  const end = moment(endDateNor);
  let count1 = 0;

  const holidays = await Holiday.find()
    .lean()
    .then((docs) => {
      return docs.map((doc) => doc.dateHoliday);
    })
    .catch((err) => {
      console.log(err);
      return [];
    });

  const diff = end.diff(start, "days"); // calculate the difference between start and end dates

  for (let i = 0; i <= diff; i++) {
    const date = moment(startDateNor).add(i, "days");

    if (
      !holidays.includes(date.format("YYYY-MM-DD")) &&
      date.isoWeekday() !== 6 &&
      date.isoWeekday() !== 7
    ) {
      count1++; // increment count1 if the day is not a holiday and not a weekend
    }
  }

  return count1;
}

function countDays(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);

  const diff = end.diff(start, "days"); // calculate the difference between start and end dates

  return diff + 1; // add 1 to include both start and end dates
}

function countDaysNor(startDateNor, endDateNor) {
  const start = moment(startDateNor);
  const end = moment(endDateNor);

  const diff = end.diff(start, "days"); // calculate the difference between start and end dates

  return diff + 1; // add 1 to include both start and end dates
}

exports.calculateDays = async (req, res, next) => {
  var startDate = new Date(req.body["start-date"]);
  var endDate = new Date(req.body["end-date"]);

  var startDateNor = new Date(req.body["start-date-nor"]);
  var endDateNor = new Date(req.body["end-date-nor"]);

  const workingDays = await countWorkingDays(startDate, endDate);

  const days = countDays(startDate, endDate);

  const workingDaysNor = await countWorkingDaysNor(startDateNor, endDateNor);

  const daysNor = countDaysNor(startDateNor, endDateNor);

  // ส่งค่ากลับไปยัง jQuery.ajax()
  res.json({
    countDay: days,
    workDay: workingDays,
    offkDay: days - workingDays,
    countDayNor: daysNor,
    workDayNor: workingDaysNor,
    offkDayNor: daysNor - workingDaysNor,
  });
};
