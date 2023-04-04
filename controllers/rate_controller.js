const db = require("../models/rate_model")
const uploads = db;

const XLSX = require('xlsx')

var fs = require('fs');
const path = require("path");

const uploadExcelRate = async function (req, res, next) {
    try {
        let path = req.file.path;
        var workbook = XLSX.readFile(path);
        var sheet_name_list = workbook.SheetNames
        let jsonData = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet_name_list[0]]
        )
        if (jsonData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "xml sheet has no data"
            })
        }
        let rate_data = []
        for (i = 0; i < jsonData.length; i++) {
            let data = {
                group_no: jsonData[i].group_no,
                detail: jsonData[i].detail,
            }
            console.log("data", data)
            rate_data.push(data)
        }
        let savedata = await uploads.create(rate_data)
        console.log("status 200")
        return res.status(200).json({
            success: true,
            message: savedata.length + "rows added to the database"
        })
    } catch (error) {
        console.log("Error", error)
        return res.status(500).json({ success: false, message: error.message })
    }
}
const find = async (req, res) => {
    console.log(req.body)
    try {
        const data = await uploads.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports = {
    uploadExcelRate,
    find
}