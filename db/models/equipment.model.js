const mongoose = require("mongoose");
const { EquipmentSchema } = require("../schemas/equipment.schema");

exports.EquipmentModel = mongoose.model("Equipment", EquipmentSchema);
