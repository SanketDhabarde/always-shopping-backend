const { Product } = require("../models/product.modal");

const getAllProductsHandler = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ total: products.length, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getProductHandler = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Product not found" });
  }
};

const postAllProductsHandler = async (req, res) => {
  try {
    const { data } = req.body;
    await Product.insertMany(data);
    const products = await Product.find({});
    res.status(201).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Products not added" });
  }
};

module.exports = {
  getAllProductsHandler,
  getProductHandler,
  postAllProductsHandler,
};
