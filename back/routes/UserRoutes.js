const router = require("express").Router();
const UserController = require("../controllers/UserController");
const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access Denied!" });
  }
  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token!" });
  }
}
router.post("/register", UserController.create);
router.post("/login", UserController.authenticate);
router.get("/:id", checkToken, UserController.getUser);
router.get("/", UserController.getAllUsers);
router.post("/:id", UserController.getTasksByUser);

module.exports = router;
