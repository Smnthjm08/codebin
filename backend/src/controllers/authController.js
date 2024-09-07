const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { username: username} });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User created successfully", user});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "User registration failed" });
  }
};

const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {

      const existingUser = await prisma.user.findUnique({
        where: { username: username }
      });
  
      if (!existingUser) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
  
      const isMatch = await bcrypt.compare(password, existingUser.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const token = jwt.sign(
        { id: existingUser.id, username: existingUser.username },
        JWT_SECRET,
        { expiresIn: "6h" }
      );

      res.json({ message: "Login successful", token });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };
  

const logout = ((req, res) => {
    res.json({message: "Logout successful"})
})

module.exports = { register, login, logout };
