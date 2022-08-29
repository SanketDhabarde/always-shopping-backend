const express = require("express");
const {
  postAllProductsHandler,
  getAllProductsHandler,
  getProductHandler,
} = require("../handlers/product.handler");
const router = express.Router();

router.route("/").get(getAllProductsHandler).post(postAllProductsHandler);

router.route("/:productId").get(getProductHandler);

module.exports = router;
