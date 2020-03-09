const { StaffModel } = require("../db/models/staff.model");
const { SpecialtyModel } = require("../db/models/specialty.model");

class StaffController {
  static async addOne({ firstName, lastName, email, specialties }) {
    const specs = await SpecialtyModel.find(
      { name: { $in: specialties } },
      "_id"
    );

    const staff = new StaffModel({
      firstName,
      lastName,
      email,
      specialty: specs
    });

    await staff.save();
  }

  static async deleteOne(id) {
    await StaffModel.findByIdAndDelete(id);
  }

  static async findByQuery(query) {
    const staff = await StaffModel.find().or([
      { email: { $regex: query, $options: "i" } },
      { firstName: { $regex: query, $options: "i" } },
      { lastName: { $regex: query, $options: "i" } }
    ]);
    return staff;
  }
}

exports.StaffController = StaffController;
