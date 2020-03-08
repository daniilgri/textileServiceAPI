const mongoose = require("mongoose");
const { AgeRangeSchema } = require("../schemas/ageRange.schema");

exports.AgeRangeModel = mongoose.model("AgeRange", AgeRangeSchema);
