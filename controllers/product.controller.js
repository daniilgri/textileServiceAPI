const { ProductModel } = require("../db/models/product.model");
const { AgeRangeModel } = require("../db/models/ageRange.model");
const { MaterialModel } = require("../db/models/material.model");

class ProductController {
  static async addOne({
    name,
    usageType,
    usageCondition,
    season,
    gender,
    age,
    materials,
    supportSurface,
    code
  }) {
    const ageRange = await AgeRangeModel.findOne({ name: age });

    const materialDocs = await MaterialModel.find(
      { name: { $in: materials } },
      "_id"
    );

    const product = new ProductModel({
      name,
      usageType: usageType.toUpperCase(),
      usageCondition: usageCondition.toUpperCase(),
      season: season.toUpperCase(),
      gender: gender.toUpperCase(),
      ageRange,
      materials: materialDocs,
      supportSurface: supportSurface.toUpperCase(),
      code
    });
    await product.save();
  }

  static async deleteOne(id) {
    await ProductModel.findByIdAndDelete(id);
  }

  static async findByName(name) {
    const products = await ProductModel.find({
      name: { $regex: name, $options: "i" }
    });
    return products;
  }
}

exports.ProductController = ProductController;
