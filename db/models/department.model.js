const mongoose = require("mongoose");
const { DepartmentSchema } = require("../schemas/department.schema");

exports.DepartmentModel = mongoose.model("Department", DepartmentSchema);
