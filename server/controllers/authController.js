const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const authControllers = {};

authControllers.login_get = (req, res) => {
  res.status(200).send("login");
};

authControllers.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).json({});
  }
};

module.exports = authControllers;
