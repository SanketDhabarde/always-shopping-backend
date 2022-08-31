const express = require("express");
const {
  getWishlistItemsHandler,
  addItemToWishlistHandler,
} = require("../handlers/wishlist.handler");
const router = express.Router();

router.route("/").get(getWishlistItemsHandler).post(addItemToWishlistHandler);

module.exports = router;
