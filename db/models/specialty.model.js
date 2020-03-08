const mongoose = require("mongoose");
const { SpecialtySchema } = require("../schemas/specialty.schema");

exports.SpecialtyModel = mongoose.model("Specialty", SpecialtySchema);
