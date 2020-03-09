const { AgeRangeModel } = require("../db/models/ageRange.model");

class AgeRangeController {
  static async addOne({ name, min, max }) {
    const ageRange = new AgeRangeModel({ name, upperAge: max, lowerAge: min });
    await ageRange.save();
  }

  static async deleteOne(id) {
    await AgeRangeModel.findByIdAndDelete(id);
  }

  static async findByName(name) {
    const ageRanges = await DepartmentModel.find({
      name: { $regex: name, $options: "i" }
    });
    return ageRanges;
  }
}

exports.AgeRangeController = AgeRangeController;
