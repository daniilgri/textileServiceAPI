const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  workers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff"
    }
  ],
  equipment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipment"
    }
  ]
});

exports.DepartmentSchema = DepartmentSchema;
