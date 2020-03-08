const mongoose = require("mongoose");

const EquipmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  code: String,
  date: Date
});

exports.EquipmentSchema = EquipmentSchema;
