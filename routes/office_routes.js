const uploadExcel = require("../controllers/office_controller")
const routesUploadExcel = require("express").Router()
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
routesUploadExcel.post('/',upload.single('file'),uploadExcel.uploadExcel)
routesUploadExcel.get('/bacode',uploadExcel.findBaCode)

module.exports = routesUploadExcel