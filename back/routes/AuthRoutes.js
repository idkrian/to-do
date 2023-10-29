const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
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
router.post("/register", AuthController.create);
router.post("/login", AuthController.authenticate);
router.get("/:id", checkToken, AuthController.getUser);

module.exports = router;
