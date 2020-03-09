const { Router } = require("express");
const { EquipmentController } = require("../controllers/equipment.controller");

class EquipmentRouter {
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
        await EquipmentController.addOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.put("/", async (req, res) => {
      try {
        await EquipmentController.editOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.delete("/", async (req, res) => {
      try {
        await EquipmentController.deleteOne(req.body.id);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/", async (req, res) => {
      try {
        const equipment = await EquipmentController.getAll();
        res.status(201).send({ equipment });
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/c/:code", async (req, res) => {
      try {
        const code = req.params.code || "";
        const equipment = await EquipmentController.findByCode(code);
        res.status(201).send({ equipment });
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });
  }
}

exports.equipmentRouter = new EquipmentRouter();
