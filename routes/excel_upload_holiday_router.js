const uploadExcelHoliday = require("../controllers/excel_upload_holiday_controller")
const routesUploadExcelHoliday = require("express").Router()
const multer = require('multer')
const uuidv4 = require('uuid')
const path = require("path")
const { extname } = require("path")
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'excell_upload_holiday/')
    },
    filename: function(req,file,cb){
        const newFilename = uuidv4.v4()+extname(file.originalname)
        cb(null,newFilename)
        console.log("FileName",newFilename)
    }
})

const upload = multer({storage:storage,limits:{fileSize:10*1024*1024}})
routesUploadExcelHoliday.post('/',upload.single('file'),uploadExcelHoliday.uploadExcelHoliday)

module.exports = routesUploadExcelHoliday