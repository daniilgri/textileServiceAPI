const mongoose = require("mongoose");

const StaffSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  specialty: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Specialty",
      required: true
    }
  ]
});

exports.StaffSchema = StaffSchema;
