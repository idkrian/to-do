const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserController {
  static async getAllUsers(req, res) {
    const user = await User.find();

    try {
      res.status(201).json({
        user,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async getUser(req, res) {
    const { id } = req.params;
    const user = await User.findById(id).populate("tasks");
    // res.send(user.tasks);
    if (!user) {
      res.status(422).json({ message: "The user doesn't exists!" });
      return;
    }
    try {
      res.status(201).json({
        user,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async getTasksByUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findById(id).populate("tasks");
      res.send(user.tasks);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async create(req, res) {
    const { email, password, confirmPassword } = req.body;

    if (!email) {
      res.status(422).json({ message: "The email is mandatory!" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "The password is mandatory!" });
      return;
    }
    if (password !== confirmPassword) {
      res.status(422).json({ message: "The passwords needs to be similar!" });
      return;
    }
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(422).json({ message: "The email already exists" });
      return;
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      password: passwordHash,
    });
    try {
      const newUser = await user.save();
      res.status(201).json({
        message: "User Created!",
        newUser,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async authenticate(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.status(422).json({ message: "The email is mandatory!" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "The password is mandatory!" });
      return;
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      res
        .status(422)
        .json({ message: "Sorry, we couldn't find your account." });
      return;
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(422).json({ message: "The password is incorrect!" });
      return;
    }

    try {
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );
      res.status(201).json({
        message: "Successfully authenticated!",
        token,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
module.exports = UserController;
