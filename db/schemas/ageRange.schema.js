const mongoose = require("mongoose");

const { AGE_RANGES } = require("../../constants/ageRangeType.constants");

const AgeRangeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lowerAge: Number,
  upperAge: Number
});

exports.AgeRangeSchema = AgeRangeSchema;
