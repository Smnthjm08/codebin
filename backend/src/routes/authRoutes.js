const express = require("express");
const { register, login, logout } = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware,  logout);

module.exports = router
