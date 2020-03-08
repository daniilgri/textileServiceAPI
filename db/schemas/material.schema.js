const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

exports.MaterialSchema = MaterialSchema;
