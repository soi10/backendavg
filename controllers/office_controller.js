const db = require("../models/office_model")
const uploads = db;

const XLSX = require('xlsx')

var fs = require('fs');
const path = require("path");

const uploadExcel = async function (req, res, next) {
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
        let office_data = []
        for (i = 0; i < jsonData.length; i++) {
            let data = {
                office: jsonData[i].office,
                office_head: jsonData[i].office_head,
                office_branch: jsonData[i].office_branch,
                office_trsg: jsonData[i].office_trsg,
                office_trsg_branch: jsonData[i].office_trsg_branch,
                office_trsg_head: jsonData[i].office_trsg_head,
                office_name: jsonData[i].office_name,
            }
            console.log("data", data)
            office_data.push(data)
        }
        let savedata = await uploads.create(office_data)
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
const findBaCode = async (req, res) => {
    console.log(req.body)
    try {
        const data = await uploads.find({
            office_trsg_branch: req.query.Peacode
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports = {
    uploadExcel,
    findBaCode
}