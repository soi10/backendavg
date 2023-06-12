const DataDetailModel = require("../models/data_detail")

exports.addDataDetail = async (req, res, next) => {
  //console.log(req.body)
  const addHoliday = new DataDetailModel({
    peacode: req.body.peacode,
    office_name: req.body.office_name,
    ca_no: req.body.ca_no,
    name_customer: req.body.name_customer,
    rate: req.body.rate,
    pea_no: req.body.pea_no,
    type_customer: req.body.type_customer,
    address: req.body.address,
    billing_Cycle: req.body.billing_Cycle,
    year: req.body.year,
    cause: req.body.cause,
    in_cause: req.body.in_cause,
    data_broken: {
      normal_date_start: req.body.normal_date_start,
      normal_date_end: req.body.normal_date_end,
      brok_date_start: req.body.brok_date_start,
      brok_date_end: req.body.brok_date_end,
      p_normal: req.body.p_normal,
      op_normal: req.body.op_normal,
      h_normal: req.body.h_normal,
      sum_normal: req.body.sum_normal,
      p_brok: req.body.p_brok,
      op_brok: req.body.op_brok,
      h_brok: req.body.h_brok,
      sum_brok: req.body.sum_brok,
      sum_all: req.body.sum_all
    },
    unit_use: {
      kwh_p: {
        unit_read_after_kwh_p: req.body.unit_read_after_kwh_p,
        unit_read_before_kwh_p: req.body.unit_read_before_kwh_p,
        multiplier_kwh_p: req.body.multiplier_kwh_p,
        unit_normal_kwh_p: req.body.unit_normal_kwh_p,
        date_normal_kwh_p: req.body.date_normal_kwh_p,
        avg_date_kwh_p: req.body.avg_date_kwh_p,
        date_brok_kwh_p: req.body.date_brok_kwh_p,
        unit_avg_to_sap_kwh_p: req.body.unit_avg_to_sap_kwh_p
      },
      kwh_op: {
        unit_read_after_kwh_op: req.body.unit_read_after_kwh_op,
        unit_read_before_kwh_op: req.body.unit_read_before_kwh_op,
        multiplier_kwh_op: req.body.multiplier_kwh_op,
        unit_normal_kwh_op: req.body.unit_normal_kwh_op,
        date_normal_kwh_op: req.body.date_normal_kwh_op,
        avg_date_kwh_op: req.body.avg_date_kwh_op,
        date_brok_kwh_op: req.body.date_brok_kwh_op,
        unit_avg_to_sap_kwh_op: req.body.unit_avg_to_sap_kwh_op
      },
      kwh_h: {
        unit_read_after_kwh_h: req.body.unit_read_after_kwh_h,
        unit_read_before_kwh_h: req.body.unit_read_before_kwh_h,
        multiplier_kwh_h: req.body.multiplier_kwh_h,
        unit_normal_kwh_h: req.body.unit_normal_kwh_h,
        date_normal_kwh_h: req.body.date_normal_kwh_h,
        avg_date_kwh_h: req.body.avg_date_kwh_h,
        date_brok_kwh_h: req.body.date_brok_kwh_h,
        unit_avg_to_sap_kwh_h: req.body.unit_avg_to_sap_kwh_h
      },
    },
    kwh_unit: {
      kwh_p: {
        unit_read_after_unit_kwh_p: req.body.unit_read_after_unit_kwh_p,
        unit_read_before_unit_kwh_p: req.body.unit_read_before_unit_kwh_p,
        multiplier_unit_kwh_p: req.body.multiplier_unit_kwh_p,
        kwh_normal_unit_kwh_p: req.body.kwh_normal_unit_kwh_p
      },
      kwh_op: {
        unit_read_after_unit_kwh_op: req.body.unit_read_after_unit_kwh_op,
        unit_read_before_unit_kwh_op: req.body.unit_read_before_unit_kwh_op,
        multiplier_unit_kwh_op: req.body.multiplier_unit_kwh_op,
        kwh_normal_unit_kwh_op: req.body.kwh_normal_unit_kwh_op
      },
      kwh_h: {
        unit_read_after_unit_kwh_h: req.body.unit_read_after_unit_kwh_h,
        unit_read_before_unit_kwh_h: req.body.unit_read_before_unit_kwh_h,
        multiplier_unit_kwh_h: req.body.multiplier_unit_kwh_h,
        kwh_normal_unit_kwh_h: req.body.kwh_normal_unit_kwh_h
      },

    },
    sum_normal_final: req.body.sum_normal_final,
    sum_to_sap_final: req.body.sum_to_sap_final,
    user: req.body.user,
    comment: req.body.comment,
  });

  try {
    const result = await addHoliday.save();
    res.status(200).json({
      message: "success",
      node: result,
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.getListByPeaCode = async (req, res, next) => {
  console.log(req.query.peacode)
  const peacode = req.query.peacode;

  try {
    const getListByPeaCode = await DataDetailModel.find({
      peacode: peacode,
    });
    // res.status(200).json({
    //   //   message: "success",
    //   //   data: getHoliday,

    //   getHoliday,
    // });
    res.send(getListByPeaCode);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.updateById = async (req, res, next) => {
  const id = req.query.id;
  console.log(req.body)
  const filter = { _id: req.body.id }
  const update = {
    // peacode: req.body.peacode,
    // office_name: req.body.office_name,
    // ca_no: req.body.ca_no,
    // name_customer: req.body.name_customer,
    // rate: req.body.rate,
    // pea_no: req.body.pea_no,
    // type_customer: req.body.type_customer,
    // address: req.body.address,
    // billing_Cycle: req.body.billing_Cycle,
    // year: req.body.year,
    // cause: req.body.cause,
    in_cause: req.body.in_cause,
    data_broken: {
      normal_date_start: req.body.normal_date_start,
      normal_date_end: req.body.normal_date_end,
      brok_date_start: req.body.brok_date_start,
      brok_date_end: req.body.brok_date_end,
      p_normal: req.body.p_normal,
      op_normal: req.body.op_normal,
      h_normal: req.body.h_normal,
      sum_normal: req.body.sum_normal,
      p_brok: req.body.p_brok,
      op_brok: req.body.op_brok,
      h_brok: req.body.h_brok,
      sum_brok: req.body.sum_brok,
      sum_all: req.body.sum_all
    },
    unit_use: {
      kwh_p: {
        unit_read_after_kwh_p: req.body.unit_read_after_kwh_p,
        unit_read_before_kwh_p: req.body.unit_read_before_kwh_p,
        multiplier_kwh_p: req.body.multiplier_kwh_p,
        unit_normal_kwh_p: req.body.unit_normal_kwh_p,
        date_normal_kwh_p: req.body.date_normal_kwh_p,
        avg_date_kwh_p: req.body.avg_date_kwh_p,
        date_brok_kwh_p: req.body.date_brok_kwh_p,
        unit_avg_to_sap_kwh_p: req.body.unit_avg_to_sap_kwh_p
      },
      kwh_op: {
        unit_read_after_kwh_op: req.body.unit_read_after_kwh_op,
        unit_read_before_kwh_op: req.body.unit_read_before_kwh_op,
        multiplier_kwh_op: req.body.multiplier_kwh_op,
        unit_normal_kwh_op: req.body.unit_normal_kwh_op,
        date_normal_kwh_op: req.body.date_normal_kwh_op,
        avg_date_kwh_op: req.body.avg_date_kwh_op,
        date_brok_kwh_op: req.body.date_brok_kwh_op,
        unit_avg_to_sap_kwh_op: req.body.unit_avg_to_sap_kwh_op
      },
      kwh_h: {
        unit_read_after_kwh_h: req.body.unit_read_after_kwh_h,
        unit_read_before_kwh_h: req.body.unit_read_before_kwh_h,
        multiplier_kwh_h: req.body.multiplier_kwh_h,
        unit_normal_kwh_h: req.body.unit_normal_kwh_h,
        date_normal_kwh_h: req.body.date_normal_kwh_h,
        avg_date_kwh_h: req.body.avg_date_kwh_h,
        date_brok_kwh_h: req.body.date_brok_kwh_h,
        unit_avg_to_sap_kwh_h: req.body.unit_avg_to_sap_kwh_h
      },
    },
    kwh_unit: {
      kwh_p: {
        unit_read_after_unit_kwh_p: req.body.unit_read_after_unit_kwh_p,
        unit_read_before_unit_kwh_p: req.body.unit_read_before_unit_kwh_p,
        multiplier_unit_kwh_p: req.body.multiplier_unit_kwh_p,
        kwh_normal_unit_kwh_p: req.body.kwh_normal_unit_kwh_p
      },
      kwh_op: {
        unit_read_after_unit_kwh_op: req.body.unit_read_after_unit_kwh_op,
        unit_read_before_unit_kwh_op: req.body.unit_read_before_unit_kwh_op,
        multiplier_unit_kwh_op: req.body.multiplier_unit_kwh_op,
        kwh_normal_unit_kwh_op: req.body.kwh_normal_unit_kwh_op
      },
      kwh_h: {
        unit_read_after_unit_kwh_h: req.body.unit_read_after_unit_kwh_h,
        unit_read_before_unit_kwh_h: req.body.unit_read_before_unit_kwh_h,
        multiplier_unit_kwh_h: req.body.multiplier_unit_kwh_h,
        kwh_normal_unit_kwh_h: req.body.kwh_normal_unit_kwh_h
      },

    },
    sum_normal_final: req.body.sum_normal_final,
    sum_to_sap_final: req.body.sum_to_sap_final,
    user: req.body.user,
    comment: req.body.comment,

  }

  try {
    const updateById = await DataDetailModel.findOneAndUpdate(filter, update);
    updateById = await DataDetailModel.findOne(filter)
    res.status(200).json({
      message: "success",
      data: updateById,
      //   getHoliday,
    });
    // res.send(updateHoliday);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.getById = async (req, res, next) => {
  const id = req.query.id;
  // console.log(req.query)

  try {
    const getById = await DataDetailModel.find({
      _id: id,
    });
    // res.status(200).json({
    //   //   message: "success",
    //   //   data: getHoliday,

    //   getHoliday,
    // });
    res.send(getById);
    //console.log(getById)
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.DeleteId = async (req, res, next) => {
  const id = req.body.id;
  console.log(req.body)

  try {
    const DeleteId = await DataDetailModel.findOneAndDelete({
      _id: id,
    });
    // res.status(200).json({
    //   //   message: "success",
    //   //   data: getHoliday,

    //   getHoliday,
    // });
    res.send(DeleteId);
    //console.log(getById)
  } catch (err) {
    res.json({
      message: err,
    });
  }
};