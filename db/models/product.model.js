const mongoose = require("mongoose");
const { ProductSchema } = require("../schemas/product.schema");

exports.ProductModel = mongoose.model("Product", ProductSchema);
