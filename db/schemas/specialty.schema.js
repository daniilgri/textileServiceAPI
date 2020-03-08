const mongoose = require("mongoose");

const SpecialtySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

exports.SpecialtySchema = SpecialtySchema;
