const mongoose = require("mongoose");
const { StaffSchema } = require("../schemas/staff.schema");

exports.StaffModel = mongoose.model("Staff", StaffSchema);
