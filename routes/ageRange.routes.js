const { Router } = require("express");
const { AgeRangeController } = require("../controllers/ageRange.controller");

class AgeRangeRouter {
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
        await AgeRangeController.addOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.delete("/", async (req, res) => {
      try {
        await AgeRangeController.deleteOne(req.body.id);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/s/", async (req, res) => {
      try {
        const name = req.query.q || "";
        const ageRanges = await AgeRangeController.findByName(name);
        res.status(201).send({ ageRanges });
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });
  }
}

exports.ageRangeRouter = new AgeRangeRouter();
