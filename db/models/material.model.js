const mongoose = require("mongoose");
const { MaterialSchema } = require("../schemas/material.schema");

exports.MaterialModel = mongoose.model("Material", MaterialSchema);
