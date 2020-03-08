const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  count: {
    type: Number,
    required: true
  }
});

exports.OrderSchema = OrderSchema;
