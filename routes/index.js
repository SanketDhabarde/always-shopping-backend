const express = require("express");
const router = express.Router();
const productRoutes = require("./product.router");
const authRoutes = require("./auth.router");
const wishlistRoutes = require("./wishlist.router");
const cartRoutes = require("./cart.router");
const authVerify = require("../middlewares/authVerify.middleware");

router.use("/products", productRoutes);
router.use("/auth", authRoutes);
router.use("/user/wishlist", authVerify, wishlistRoutes);
router.use("/user/cart", authVerify, cartRoutes);

module.exports = router;
