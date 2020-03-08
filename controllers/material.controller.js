const { MaterialModel } = require("../db/models/material.model");

class MaterialController {
  static async addOne(data) {
    const material = new MaterialModel({
      name: data
    });
    await material.save();
  }

  static async editOne({ id, data }) {
    const material = await MaterialModel.findById(id);
    material.name = data;
    await material.save();
  }

  static async deleteOne(id) {
    await MaterialModel.findByIdAndDelete(id);
  }

  static async findByName(query) {
    const materials = await MaterialModel.find({
      name: { $regex: query, $options: "i" }
    });
    return materials;
  }
}

exports.MaterialController = MaterialController;
