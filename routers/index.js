const express = require("express");
const router = express.Router();
const productRoutes = require("./product.router");

router.use("/products", productRoutes);

module.exports = router;
