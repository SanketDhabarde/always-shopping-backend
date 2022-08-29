const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.modal");
const { formatDate } = require("../utils/authUtils");

const signupHandler = async (req, res) => {
  const { email, password, ...rest } = req.body;
  try {
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return res
        .status(422)
        .json({ error: "Unprocessable Entity. Email Already Exists." });
    }

    const _id = uuid();
    const encryptedPassword = await bcrypt.hashSync(password, 5);
    const newUser = {
      _id,
      email,
      password: encryptedPassword,
      ...rest,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      cart: [],
      wishlist: [],
    };
    const createdUser = await User.create(newUser);
    const encodedToken = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(201).json({
      createdUser: {
        _id: createdUser._id,
        email: createdUser.email,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        createdAt: createdUser.createdAt,
        updatedAt: createdUser.updatedAt,
        cart: [],
        wishlist: [],
      },
      encodedToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User not created", error });
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(404).json({
        error: "The email you entered is not Registered. Not Found error",
      });
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      return res.status(401).json({
        error: "The credentials you entered are invalid.",
      });
    }

    const encodedToken = jwt.sign(
      { _id: foundUser._id, email: foundUser.email },
      process.env.JWT_SECRET
    );
    foundUser.password = undefined;
    res.status(200).json({ foundUser, encodedToken });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { signupHandler, loginHandler };
