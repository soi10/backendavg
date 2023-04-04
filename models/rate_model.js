const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const rate = new Schema(
    {
        group_no: {
            type: String,
        },
        detail: {
            type: String,
        },

    }
);

module.exports = mongoose.model("rate", rate);