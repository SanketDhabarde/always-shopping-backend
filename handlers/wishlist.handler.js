const { User } = require("../models/user.modal");
const { formatDate } = require("../utils/authUtils");
const { isItemInList } = require("../utils/isItemInList");

const getWishlistItemsHandler = async (req, res) => {
  const { userId } = req.user;
  try {
    const foundUser = await User.findById(userId);
    res.status(200).json({ wishlist: foundUser.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Couldn't get the wishlist",
    });
  }
};

const addItemToWishlistHandler = async (req, res) => {
  const { userId } = req.user;
  try {
    const foundUser = await User.findById(userId);
    const userWishlist = foundUser.wishlist;
    const { product } = req.body;

    const isProductInWishlist = isItemInList(product._id, userWishlist);

    if (isProductInWishlist) {
      return res
        .status(409)
        .json({ error: "Product already exists in wishlist" });
    }

    userWishlist.push({
      ...product,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });

    await User.findByIdAndUpdate(userId, {
      wishlist: userWishlist,
    });

    res.status(201).json({ wishlist: userWishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Couldn't add item to the wishlist",
    });
  }
};

const removeItemFromWishlistHandler = async (req, res) => {
  const { userId } = req.user;
  try {
    const foundUser = await User.findById(userId);
    let userWishlist = foundUser.wishlist;

    const { productId } = req.params;
    userWishlist = userWishlist.filter((product) => product._id != productId);

    await User.findByIdAndUpdate(userId, { wishlist: userWishlist });

    res.status(200).json({ wishlist: userWishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Couldn't remove item from the wishlist",
    });
  }
};

module.exports = {
  getWishlistItemsHandler,
  addItemToWishlistHandler,
  removeItemFromWishlistHandler,
};
