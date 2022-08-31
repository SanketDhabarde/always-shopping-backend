const express = require("express");
const {
  getWishlistItemsHandler,
  addItemToWishlistHandler,
  removeItemFromWishlistHandler,
} = require("../handlers/wishlist.handler");
const router = express.Router();

router.route("/").get(getWishlistItemsHandler).post(addItemToWishlistHandler);

router.route("/:productId").delete(removeItemFromWishlistHandler);

module.exports = router;
