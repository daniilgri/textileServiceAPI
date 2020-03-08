const mongoose = require("mongoose");
const { OrderSchema } = require("../schemas/order.schema");

exports.OrderModel = mongoose.model("Order", OrderSchema);
