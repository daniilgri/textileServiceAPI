const { OrderModel } = require("../db/models/order.model");
const { DepartmentModel } = require("../db/models/department.model");
const { ProductModel } = require("../db/models/product.model");

class OrderController {
  static async addOne({ departmentName, productCode, count }) {
    const department = await DepartmentModel.findOne({ name: departmentName });
    const product = await ProductModel.findOne({ code: productCode });

    const order = new OrderModel({ department, product, count });
    await order.save();
  }

  static async deleteOne(id) {
    await OrderModel.findByIdAndDelete(id);
  }

  static async getAll() {
    // TODO: minimize populate calls
    const orders = await OrderModel.find({})
      .populate({
        path: "product",
        populate: {
          path: "materials"
        }
      })
      .populate({
        path: "product",
        populate: {
          path: "ageRange"
        }
      })
      .populate({
        path: "department",
        populate: {
          path: "workers",
          populate: {
            path: "specialty"
          }
        }
      })
      .populate({
        path: "department",
        populate: {
          path: "equipment"
        }
      });
    return orders;
  }
}

exports.OrderController = OrderController;
