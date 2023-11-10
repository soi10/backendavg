const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const office = new Schema(
    {
        office: {
            type: String,
        },
        office_head: {
            type: String,
        },
        office_branch: {
            type: String,
            // required: true,
        },
        office_trsg: {
            type: String,
            // required: true,
        },
        office_trsg_branch: {
            type: String,
            // required: true,
        },
        office_trsg_head: {
            type: String,
            // required: true,
        },
        office_name: {
            type: String,
            // required: true,
        },
    }
);

module.exports = mongoose.model("Office", office);