const uploadExcel = require("../controllers/rate_controller")
const routesUploadExcelRate = require("express").Router()
const multer = require('multer')
const uuidv4 = require('uuid')
const path = require("path")
const { extname } = require("path")
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'excel_file_upload/')
    },
    filename: function(req,file,cb){
        const newFilename = uuidv4.v4()+extname(file.originalname)
        cb(null,newFilename)
        console.log("FileName",newFilename)
    }
})

const upload = multer({storage:storage,limits:{fileSize:10*1024*1024}})
routesUploadExcelRate.post('/',upload.single('file'),uploadExcel.uploadExcelRate)
routesUploadExcelRate.get('/',uploadExcel.find)

module.exports = routesUploadExcelRate