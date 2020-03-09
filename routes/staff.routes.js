const { Router } = require("express");
const { StaffController } = require("../controllers/staff.controller");

class StaffRouter {
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
        await StaffController.addOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.delete("/", async (req, res) => {
      try {
        await StaffController.deleteOne(req.body.id);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/s/", async (req, res) => {
      try {
        const query = req.query.q || "";
        const staff = await StaffController.findByQuery(query);
        res.status(201).send({ staff });
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });
  }
}

exports.staffRouter = new StaffRouter();
