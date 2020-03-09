const { SpecialtyModel } = require("../db/models/specialty.model");

class SpecialtyController {
  static async addOne(data) {
    const material = new SpecialtyModel({
      name: data
    });
    await material.save();
  }

  static async editOne({ id, data }) {
    const specialty = await SpecialtyModel.findById(id);
    specialty.name = data;
    await specialty.save();
  }

  static async deleteOne(id) {
    await SpecialtyModel.findByIdAndDelete(id);
  }

  static async findByName(query) {
    const specialties = await SpecialtyModel.find({
      name: { $regex: query, $options: "i" }
    });
    return specialties;
  }
}

exports.SpecialtyController = SpecialtyController;
