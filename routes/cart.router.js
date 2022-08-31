const express = require("express");
const {
  getCartItemsHandler,
  addItemToCartHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
} = require("../handlers/cart.handler");
const router = express.Router();

router.route("/").get(getCartItemsHandler).post(addItemToCartHandler);

router
  .route("/:productId")
  .post(updateCartItemHandler)
  .delete(removeItemFromCartHandler);

module.exports = router;
