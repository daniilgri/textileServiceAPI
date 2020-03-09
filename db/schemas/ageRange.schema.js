const mongoose = require("mongoose");

const AgeRangeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lowerAge: Number,
  upperAge: Number
});

exports.AgeRangeSchema = AgeRangeSchema;
