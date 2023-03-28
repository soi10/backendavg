const Holiday = require("../models/holiday");

exports.addHoliday = async (req, res, next) => {
  const dateHoliday = req.body.dateHoliday;
  const nameHoliday = req.body.nameHoliday;
  const yearHoliday = req.body.yearHoliday;

  const addHoliday = new Holiday({
    dateHoliday: dateHoliday,
    nameHoliday: nameHoliday,
    yearHoliday: yearHoliday,
  });

  try {
    const result = await addHoliday.save();
    res.status(201).json({
      message: "บันทึกสำเร็จ",
      node: result,
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.getHoliday = async (req, res, next) => {
  const yearHoliday = req.body.yearHoliday;

  try {
    const getHoliday = await Holiday.find({
      yearHoliday: yearHoliday,
    });
    // res.status(200).json({
    //   //   message: "success",
    //   //   data: getHoliday,

    //   getHoliday,
    // });
    res.send(getHoliday);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.getOneHoliday = async (req, res, next) => {
  const _id = req.body._id;

  try {
    const getOneHoliday = await Holiday.find({
      _id: _id,
    });
    // res.status(200).json({
    //   //   message: "success",
    //   //   data: getHoliday,

    //   getHoliday,
    // });
    res.send(getOneHoliday);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.updateHoliday = async (req, res, next) => {
  const _id = req.body._id;
  const dateHoliday = req.body.dateHoliday;
  const nameHoliday = req.body.nameHoliday;

  try {
    const updateHoliday = await Holiday.findOneAndUpdate(
      { _id: _id },
      { $set: { dateHoliday: dateHoliday, nameHoliday: nameHoliday } }
    );
    res.status(200).json({
      message: "success",
      data: updateHoliday,
      //   getHoliday,
    });
    // res.send(updateHoliday);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.deleteHoliday = async (req, res, next) => {
  const _id = req.body._id;

  try {
    const updateHoliday = await Holiday.deleteOne({ _id: _id });
    res.status(200).json({
      message: "success",
      data: updateHoliday,
      //   getHoliday,
    });
    // res.send(updateHoliday);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
