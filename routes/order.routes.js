const { Router } = require("express");
const { OrderController } = require("../controllers/order.controller");

class OrderRouter {
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
        await OrderController.addOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.delete("/", async (req, res) => {
      try {
        await OrderController.deleteOne(req.body.id);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/", async (req, res) => {
      try {
        await OrderController.getAll();
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });
  }
}

exports.orderRouter = new OrderRouter();
