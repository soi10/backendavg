const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const holidaySchema = new Schema(
  {
    dateHoliday: {
      type: String,
      unique: true,
      // required: true,
    },
    nameHoliday: {
      type: String,
      // required: true,
    },
    yearHoliday: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Holiday", holidaySchema);
