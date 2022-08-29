const express = require("express");
const { signupHandler, loginHandler } = require("../handlers/auth.handler");
const router = express.Router();

router.route("/signup").post(signupHandler);

router.route("/login").post(loginHandler);

module.exports = router;
