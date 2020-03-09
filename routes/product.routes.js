const { Router } = require("express");
const { ProductController } = require("../controllers/product.controller");

class ProductRouter {
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
        await ProductController.addOne(req.body);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.delete("/", async (req, res) => {
      try {
        await ProductController.deleteOne(req.body.id);
        res.status(201).send({});
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });

    this._routes.get("/s/", async (req, res) => {
      try {
        const name = req.query.q || "";
        const products = await ProductController.findByName(name);
        res.status(201).send({ products });
      } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
      }
    });
  }
}

exports.productRouter = new ProductRouter();
