const express = require("express");
const router = express.Router();
const productRoutes = require("./product.router");
const authRoutes = require("./auth.router");

router.use("/products", productRoutes);
router.use("/auth", authRoutes);

module.exports = router;
