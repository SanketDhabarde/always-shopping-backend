const mongoose = require("mongoose");
const { productSchema } = require("./product.modal");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  cart: [productSchema],
  wishlist: [productSchema],
});

const User = model("User", userSchema);

module.exports = { User };
