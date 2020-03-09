const { DepartmentModel } = require("../db/models/department.model");
const { StaffModel } = require("../db/models/staff.model");
const { EquipmentModel } = require("../db/models/equipment.model");

class DepartmentController {
  static async addOne({ name, emails, codes }) {
    const staff = await StaffModel.find({ email: { $in: emails } }, "_id");
    const equipment = await EquipmentModel.find(
      { code: { $in: codes } },
      "_id"
    );

    const department = new DepartmentModel({
      name,
      workers: staff,
      equipment
    });

    await department.save();
  }

  static async deleteOne(id) {
    await DepartmentModel.findByIdAndDelete(id);
  }

  static async findByName(name) {
    const departments = await DepartmentModel.find({
      name: { $regex: name, $options: "i" }
    });
    return departments;
  }
}

exports.DepartmentController = DepartmentController;
