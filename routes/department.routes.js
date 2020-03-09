const { Router } = require("express");
const {
  DepartmentController
} = require("../controllers/department.controller");

class DepartmentRouter {
  constructor() {
    this._routes = Router();
    this._config();
  }

  getRoutes() {
    return this._routes;
  }

  _config() {
    this._routes.post("/", async (req, res) => {
      try {
        await DepartmentController.addOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.delete("/", async (req, res) => {
      try {
        await DepartmentController.deleteOne(req.body.id);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/s/", async (req, res) => {
      try {
        const name = req.query.q || "";
        const departments = await DepartmentController.findByName(name);
        res.status(201).send({ departments });
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });
  }
}

exports.departmentRouter = new DepartmentRouter();
