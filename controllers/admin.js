const Admin = require("../models/admin");

exports.addAdmin = async (req, res, next) => {
  const adminCode = req.body.adminCode;

  const addAdmin = new Admin({
    adminCode: adminCode,
  });

  try {
    const result = await addAdmin.save();
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

exports.getAdmin = async (req, res, next) => {
  const adminCode = req.body.adminCode;
  try {
    const getAdmin = await Admin.find({
      adminCode: adminCode,
    });
    res.status(200).json({
      message: "success",
      data: getAdmin,
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
