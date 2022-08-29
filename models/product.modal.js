const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  productName: String,
  price: Number,
  description: String,
  categoryName: String,
  image: String,
  latest: Boolean,
  rate: Number,
  alt: String,
  oldPrice: Number,
  fastDelivery: Boolean,
  quantity: Number,
  inStock: Boolean,
  discount: Number,
});

const Product = model("Product", productSchema);

module.exports = { Product, productSchema };
