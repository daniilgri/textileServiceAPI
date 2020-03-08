const { Router } = require("express");
const { MaterialController } = require("../controllers/material.controller");

class MaterialRouter {
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
        await MaterialController.addOne(req.body.material);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.put("/", async (req, res) => {
      try {
        await MaterialController.editOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.delete("/", async (req, res) => {
      try {
        await MaterialController.deleteOne(req.body.id);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/s/", async (req, res) => {
      try {
        const query = req.query.q || "";
        const materials = await MaterialController.findByName(query);
        res.status(201).send({ materials });
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });
  }
}

exports.materialRouter = new MaterialRouter();
