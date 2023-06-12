const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const dataDetail = new Schema(
    {
        peacode: {
            type: String
        },
        office_name: {
            type: String
        },
        ca_no: {
            type: String
        },
        name_customer: {
            type: String
        },
        rate: {
            type: String
        },
        pea_no: {
            type: String
        },
        type_customer: {
            type: String
        },
        address: {
            type: String
        },
        billing_Cycle: {
            type: String
        },
        year: {
            type: String
        },
        cause: {
            type: String
        },
        in_cause: {
            type: String
        },
        data_broken: {
            normal_date_start: {
                type: String
            },
            normal_date_end: {
                type: String
            },
            brok_date_start: {
                type: String
            },
            brok_date_end: {
                type: String
            },
            p_normal: {
                type: String
            },
            op_normal: {
                type: String
            },
            h_normal: {
                type: String
            },
            sum_normal: {
                type: String
            },
            p_brok: {
                type: String
            },
            op_brok: {
                type: String
            },
            h_brok: {
                type: String
            },
            sum_brok: {
                type: String
            },
            sum_all: {
                type: String
            }
        },
        unit_use: {
            kwh_p: {
                unit_read_after_kwh_p: {
                    type: String
                },
                unit_read_before_kwh_p: {
                    type: String
                },
                multiplier_kwh_p: {
                    type: String
                },
                unit_normal_kwh_p: {
                    type: String
                },
                date_normal_kwh_p: {
                    type: String
                },
                avg_date_kwh_p: {
                    type: String
                },
                date_brok_kwh_p: {
                    type: String
                },
                unit_avg_to_sap_kwh_p: {
                    type: String
                }
            },
            kwh_op: {
                unit_read_after_kwh_op: {
                    type: String
                },
                unit_read_before_kwh_op: {
                    type: String
                },
                multiplier_kwh_op: {
                    type: String
                },
                unit_normal_kwh_op: {
                    type: String
                },
                date_normal_kwh_op: {
                    type: String
                },
                avg_date_kwh_op: {
                    type: String
                },
                date_brok_kwh_op: {
                    type: String
                },
                unit_avg_to_sap_kwh_op: {
                    type: String
                }
            },
            kwh_h: {
                unit_read_after_kwh_h: {
                    type: String
                },
                unit_read_before_kwh_h: {
                    type: String
                },
                multiplier_kwh_h: {
                    type: String
                },
                unit_normal_kwh_h: {
                    type: String
                },
                date_normal_kwh_h: {
                    type: String
                },
                avg_date_kwh_h: {
                    type: String
                },
                date_brok_kwh_h: {
                    type: String
                },
                unit_avg_to_sap_kwh_h: {
                    type: String
                }
            },
        },
        kwh_unit: {
            kwh_p: {
                unit_read_after_unit_kwh_p: {
                    type: String
                },
                unit_read_before_unit_kwh_p: {
                    type: String
                },
                multiplier_unit_kwh_p: {
                    type: String
                },
                kwh_normal_unit_kwh_p: {
                    type: String
                }
            },
            kwh_op: {
                unit_read_after_unit_kwh_op: {
                    type: String
                },
                unit_read_before_unit_kwh_op: {
                    type: String
                },
                multiplier_unit_kwh_op: {
                    type: String
                },
                kwh_normal_unit_kwh_op: {
                    type: String
                }
            },
            kwh_h: {
                unit_read_after_unit_kwh_h: {
                    type: String
                },
                unit_read_before_unit_kwh_h: {
                    type: String
                },
                multiplier_unit_kwh_h: {
                    type: String
                },
                kwh_normal_unit_kwh_h: {
                    type: String
                }
            }
        },
        sum_normal_final: {
            type: String
        },
        sum_to_sap_final: {
            type: String
        },
        user: {
            type: String
        },
        comment: {
            type: String
        },
        createAt: {
            type: Date, default: Date.now
        }
    }
)

module.exports = mongoose.model("DataDetail", dataDetail);