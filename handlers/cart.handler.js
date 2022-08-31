const { User } = require("../models/user.modal");
const { formatDate } = require("../utils/authUtils");
const { isItemInList } = require("../utils/isItemInList");

const getCartItemsHandler = async (req, res) => {
  const { userId } = req.user;
  try {
    const foundUser = await User.findById(userId);
    const userCart = foundUser.cart;

    res.status(200).json({ cart: userCart });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong. Couldn't get the cart" });
  }
};

const addItemToCartHandler = async (req, res) => {
  const { userId } = req.user;
  try {
    const foundUser = await User.findById(userId);
    const userCart = foundUser.cart;

    const { product } = req.body;

    const isProductInCart = isItemInList(product._id, userCart);

    if (isProductInCart) {
      return res.status(409).json({ error: "Product already exists in cart" });
    }

    userCart.push({
      ...product,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });

    await User.findByIdAndUpdate(userId, { cart: userCart });

    res.status(201).json({ cart: userCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Couldn't add product to the cart",
    });
  }
};

const removeItemFromCartHandler = async (req, res) => {
  const { userId } = req.user;
  try {
    const foundUser = await User.findById(userId);
    let userCart = foundUser.cart;

    const { productId } = req.params;

    userCart = userCart.filter((product) => product._id != productId);

    await User.findByIdAndUpdate(userId, { cart: userCart });

    res.status(200).json({ cart: userCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Couldn't remove product from the cart",
    });
  }
};

const updateCartItemHandler = async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.params;
  try {
    const foundUser = await User.findById(userId);
    let userCart = foundUser.cart;

    const { action } = req.body;

    if (action === "increment") {
      userCart.forEach((product) => {
        if (product._id == productId) {
          product.quantity += 1;
          product.updatedAt = formatDate();
        }
      });
    } else if (action === "decrement") {
      userCart.forEach((product) => {
        if (product._id == productId && product.quantity > 1) {
          product.quantity -= 1;
          product.updatedAt = formatDate();
        }
      });
    }

    await User.findByIdAndUpdate(userId, { cart: userCart });

    res.status(200).json({ cart: userCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Couldn't update product in the cart",
    });
  }
};

module.exports = {
  getCartItemsHandler,
  addItemToCartHandler,
  updateCartItemHandler,
  removeItemFromCartHandler,
};
