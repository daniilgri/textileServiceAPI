const { Router } = require("express");
const { SpecialtyController } = require("../controllers/specialty.controller");

class SpecialtyRouter {
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
        await SpecialtyController.addOne(req.body.specialty);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.put("/", async (req, res) => {
      try {
        await SpecialtyController.editOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.delete("/", async (req, res) => {
      try {
        await SpecialtyController.deleteOne(req.body.id);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/s/", async (req, res) => {
      try {
        const query = req.query.q || "";
        const specialties = await SpecialtyController.findByName(query);
        res.status(201).send({ specialties });
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });
  }
}

exports.specialtyRouter = new SpecialtyRouter();
