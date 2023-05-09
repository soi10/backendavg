const DataDetailModel = require("../models/data_detail")

exports.addDataDetail = async (req, res, next) => {
    console.log(req.body)
    const addHoliday = new DataDetailModel({
        peacode:req.body.peacode,
        office_name:req.body.office_name,
        ca_no:req.body.ca_no,
        name_customer:req.body.name_customer,
        rate:req.body.rate,
        pea_no:req.body.pea_no,
        billing_Cycle:req.body.billing_Cycle,
        year:req.body.year,
        cause:req.body.cause,
        in_cause:req.body.in_cause,
        data_broken:{
            normal_date_start:req.body.normal_date_start,
            normal_date_end:req.body.normal_date_end,
            brok_date_start:req.body.brok_date_start,
            brok_date_end:req.body.brok_date_end,
            p_normal:req.body.p_normal,
            op_normal:req.body.op_normal,
            h_normal:req.body.h_normal,
            sum_normal:req.body.sum_normal,
            p_brok:req.body.p_brok,
            op_brok:req.body.op_brok,
            h_brok:req.body.h_brok,
            sum_brok:req.body.sum_brok,
            sum_all:req.body.sum_all
        },
        unit_use:{
            kwh_p:{
                unit_read_after:req.body.unit_read_after,
                unit_read_before:req.body.unit_read_before,
                multiplier:req.body.multiplier,
                unit_normal:req.body.unit_normal,
                date_normal:req.body.date_normal,
                avg_date:req.body.avg_date,
                date_brok:req.body.data_broken,
                unit_avg_to_sap:req.body.unit_avg_to_sap
            },
            kwh_op:{
                unit_read_after:req.body.unit_read_after,
                unit_read_before:req.body.unit_read_before,
                multiplier:req.body.multiplier,
                unit_normal:req.body.unit_normal,
                date_normal:req.body.date_normal,
                avg_date:req.body.avg_date,
                date_brok:req.body.data_broken,
                unit_avg_to_sap:req.body.unit_avg_to_sap
            },
            kwh_h:{
                unit_read_after:req.body.unit_read_after,
                unit_read_before:req.body.unit_read_before,
                multiplier:req.body.multiplier,
                unit_normal:req.body.unit_normal,
                date_normal:req.body.date_normal,
                avg_date:req.body.avg_date,
                date_brok:req.body.data_broken,
                unit_avg_to_sap:req.body.unit_avg_to_sap
            },
        },
        kwh_unit:{
            kwh_p:{
                unit_read_after:req.body.unit_read_after,
                unit_read_before:req.body.unit_read_before,
                multiplier:req.body.multiplier,
                kwh_normal:req.body.kwh_normalkwh_normal       
             },
             kwh_op:{
                unit_read_after:req.body.unit_read_after,
                unit_read_before:req.body.unit_read_before,
                multiplier:req.body.multiplier,
                kwh_normal:req.body.kwh_normalkwh_normal       
             },
             kwh_h:{
                unit_read_after:req.body.unit_read_after,
                unit_read_before:req.body.unit_read_before,
                multiplier:req.body.multiplier,
                kwh_normal:req.body.kwh_normalkwh_normal       
             },
             
        },
        user:req.body.user
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