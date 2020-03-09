const { EquipmentModel } = require("../db/models/equipment.model");

class EquipmentController {
  static async addOne({ name, code, date }) {
    const equipment = new EquipmentModel({
      name,
      code,
      date: Date.parse(date)
    });
    await equipment.save();
  }

  static async editOne({ id, name = null, code = null, year = null }) {
    // TODO add validation + removing empty fields
    const equipment = await EquipmentModel.findById(id);
    if (name !== null) {
      equipment.name = name;
    }
    if (code !== null) {
      equipment.code = code;
    }
    if (year !== null) {
      equipment.year = year;
    }

    await equipment.save();
  }

  static async deleteOne(id) {
    await EquipmentModel.findByIdAndDelete(id);
  }

  static async findByCode(code) {
    const equipment = await EquipmentModel.find({
      code: { $regex: code, $options: "i" }
    });
    return equipment;
  }

  static async getAll() {
    const equipment = await EquipmentModel.find({});
    return equipment;
  }
}

exports.EquipmentController = EquipmentController;
