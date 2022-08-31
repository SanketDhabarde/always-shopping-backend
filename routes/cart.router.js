const express = require("express");
const {
  getCartItemsHandler,
  addItemToCartHandler,
  removeItemFromCartHandler,
} = require("../handlers/cart.handler");
const router = express.Router();

router.route("/").get(getCartItemsHandler).post(addItemToCartHandler);

router.route("/:productId").delete(removeItemFromCartHandler);

module.exports = router;
